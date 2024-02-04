/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimelineItem = /* GraphQL */ `
  mutation CreateTimelineItem(
    $input: CreateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    createTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        source
        type
        createdAt
        updatedAt
        __typename
      }
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      comment {
        nextToken
        __typename
      }
      timelineItemContentId
      timelineItemAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTimelineItem = /* GraphQL */ `
  mutation UpdateTimelineItem(
    $input: UpdateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    updateTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        source
        type
        createdAt
        updatedAt
        __typename
      }
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      comment {
        nextToken
        __typename
      }
      timelineItemContentId
      timelineItemAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTimelineItem = /* GraphQL */ `
  mutation DeleteTimelineItem(
    $input: DeleteTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    deleteTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      content {
        id
        source
        type
        createdAt
        updatedAt
        __typename
      }
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      comment {
        nextToken
        __typename
      }
      timelineItemContentId
      timelineItemAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      body
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      timelineItemCommentId
      commentAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      body
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      timelineItemCommentId
      commentAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      body
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      timelineItemCommentId
      commentAuthorId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
