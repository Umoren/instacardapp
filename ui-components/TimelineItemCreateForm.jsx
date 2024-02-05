/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField, SelectField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTimelineItem } from "./graphql/mutations";
import { listUsers, listComments, listContents } from "./graphql/queries";


const client = generateClient();

export default function TimelineItemCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    description: "",
    postTime: "",
  };
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [postTime, setPostTime] = React.useState(initialValues.postTime);
  const [errors, setErrors] = React.useState({});
  const [authorId, setAuthorId] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [contentId, setContentId] = React.useState('');
  const [contents, setContents] = React.useState([]);

  const resetStateValues = () => {
    setDescription(initialValues.description);
    setPostTime(initialValues.postTime);
    setErrors({});
  };
  const validations = {
    description: [],
    postTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await client.graphql({ query: listUsers });
        setUsers(usersData.data?.listUsers?.items);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  },
    []);


  React.useEffect(() => {
    const fetchContents = async () => {
      const contentsData = await client.graphql({ query: listContents });
      setContents(contentsData.data?.listContents?.items);
    };

    fetchContents();
  }, []);


  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          description,
          postTime,
          timelineItemAuthorId: authorId,
          timelineItemContentId: contentId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createTimelineItem.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });


          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TimelineItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description: value,
              postTime
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Post time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={postTime && convertToLocal(new Date(postTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              description,
              postTime: value,
            };
            const result = onChange(modelFields);
            value = result?.postTime ?? value;
          }
          if (errors.postTime?.hasError) {
            runValidationTasks("postTime", value);
          }
          setPostTime(value);
        }}
        onBlur={() => runValidationTasks("postTime", postTime)}
        errorMessage={errors.postTime?.errorMessage}
        hasError={errors.postTime?.hasError}
        {...getOverrideProps(overrides, "postTime")}
      ></TextField>
      <SelectField
        label="Author"
        placeholder="Please select an author"
        isDisabled={false}
        value={authorId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              postTime,
              authorId: value,
            };
            const result = onChange(modelFields);
            value = result?.authorId ?? value;
          }
          if (errors.authorId?.hasError) {
            runValidationTasks("authorId", value);
          }
          setAuthorId(value);
        }}
        errorMessage={errors.authorId?.errorMessage}
        hasError={errors.authorId?.hasError}
        {...getOverrideProps(overrides, "authorId")}
      >
        <option value="">Select an author</option>
        {users.map((user) => (
          <option
            key={user.id}
            value={user.id}
            children={user.username}
            {...getOverrideProps(overrides, `authorOption${user.id}`)}
          ></option>
        ))}
      </SelectField>

      <SelectField
        label="Content"
        placeholder="Please select a content"
        value={contentId}
        onChange={(e) => setContentId(e.target.value)}
      >
        {contents.map((content) => (
          <option key={content.id} value={content.id}>{content.source}</option>
        ))}
      </SelectField>

      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
