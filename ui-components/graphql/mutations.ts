/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $condition: ModelCommentConditionInput
    $input: CreateCommentInput!
  ) {
    createComment(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      body
      commentAuthorId
      createdAt
      id
      timelineItem {
        createdAt
        description
        id
        postTime
        timelineItemAuthorId
        timelineItemContentId
        updatedAt
        __typename
      }
      timelineItemCommentId
      updatedAt
      __typename
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $condition: ModelContentConditionInput
    $input: CreateContentInput!
  ) {
    createContent(condition: $condition, input: $input) {
      createdAt
      id
      source
      type
      updatedAt
      __typename
    }
  }
`;
export const createTimelineItem = /* GraphQL */ `
  mutation CreateTimelineItem(
    $condition: ModelTimelineItemConditionInput
    $input: CreateTimelineItemInput!
  ) {
    createTimelineItem(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      comment {
        items {
          id
          body
        }
        nextToken
        __typename
      }
      content {
        createdAt
        id
        source
        type
        updatedAt
        __typename
      }
      createdAt
      description
      id
      postTime
      timelineItemAuthorId
      timelineItemContentId
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $condition: ModelCommentConditionInput
    $input: DeleteCommentInput!
  ) {
    deleteComment(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      body
      commentAuthorId
      createdAt
      id
      timelineItem {
        createdAt
        description
        id
        postTime
        timelineItemAuthorId
        timelineItemContentId
        updatedAt
        __typename
      }
      timelineItemCommentId
      updatedAt
      __typename
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $condition: ModelContentConditionInput
    $input: DeleteContentInput!
  ) {
    deleteContent(condition: $condition, input: $input) {
      createdAt
      id
      source
      type
      updatedAt
      __typename
    }
  }
`;
export const deleteTimelineItem = /* GraphQL */ `
  mutation DeleteTimelineItem(
    $condition: ModelTimelineItemConditionInput
    $input: DeleteTimelineItemInput!
  ) {
    deleteTimelineItem(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      comment {
        nextToken
        __typename
      }
      content {
        createdAt
        id
        source
        type
        updatedAt
        __typename
      }
      createdAt
      description
      id
      postTime
      timelineItemAuthorId
      timelineItemContentId
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $condition: ModelCommentConditionInput
    $input: UpdateCommentInput!
  ) {
    updateComment(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      body
      commentAuthorId
      createdAt
      id
      timelineItem {
        createdAt
        description
        id
        postTime
        timelineItemAuthorId
        timelineItemContentId
        updatedAt
        __typename
      }
      timelineItemCommentId
      updatedAt
      __typename
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $condition: ModelContentConditionInput
    $input: UpdateContentInput!
  ) {
    updateContent(condition: $condition, input: $input) {
      createdAt
      id
      source
      type
      updatedAt
      __typename
    }
  }
`;
export const updateTimelineItem = /* GraphQL */ `
  mutation UpdateTimelineItem(
    $condition: ModelTimelineItemConditionInput
    $input: UpdateTimelineItemInput!
  ) {
    updateTimelineItem(condition: $condition, input: $input) {
      author {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      comment {
        nextToken
        __typename
      }
      content {
        createdAt
        id
        source
        type
        updatedAt
        __typename
      }
      createdAt
      description
      id
      postTime
      timelineItemAuthorId
      timelineItemContentId
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
