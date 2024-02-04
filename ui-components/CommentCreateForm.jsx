/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField, SelectField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createComment } from "./graphql/mutations";
import { listUsers, listTimelineItems } from "./graphql/queries";

const client = generateClient();
export default function CommentCreateForm(props) {
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
    body: "",
  };
  const [body, setBody] = React.useState(initialValues.body);
  const [users, setUsers] = React.useState([]);
  const [authorId, setAuthorId] = React.useState('');
  const [timelineItems, setTimelineItems] = React.useState([]);
  const [timelineItemCommentId, setTimelineItemCommentId] = React.useState('');

  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBody(initialValues.body);
    setErrors({});
  };
  const validations = {
    body: [],
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
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await client.graphql({ query: listUsers });
        setUsers(usersData.data.listUsers.items);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  React.useEffect(() => {
    const fetchTimelineItems = async () => {
      try {
        // Replace 'listTimelineItems' with the actual query to fetch timeline items
        const timelineItemsData = await client.graphql({ query: listTimelineItems });
        setTimelineItems(timelineItemsData.data.listTimelineItems.items);
      } catch (error) {
        console.error('Error fetching timeline items:', error);
      }
    };

    fetchTimelineItems();
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
          body,
          commentAuthorId: authorId,
          timelineItemCommentId
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
            query: createComment.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CommentCreateForm")}
      {...rest}
    >
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body: value,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>

      <SelectField
        label="Author"
        placeholder="Please select an author"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        errorMessage={errors.authorId?.errorMessage}
        hasError={errors.authorId?.hasError}
        {...getOverrideProps(overrides, "authorId")}
      >
        <option value="">Select an author</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.username}</option>
        ))}
      </SelectField>

      <SelectField
        label="Timeline Item"
        placeholder="Please select a timeline item"
        value={timelineItemCommentId}
        onChange={(e) => setTimelineItemCommentId(e.target.value)}
      >
        <option value="">Select a timeline item</option>
        {timelineItems.map((item) => (
          <option key={item.id} value={item.id}>{item.description}</option>
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
