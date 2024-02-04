/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimelineItem = /* GraphQL */ `
  subscription OnCreateTimelineItem(
    $filter: ModelSubscriptionTimelineItemFilterInput
  ) {
    onCreateTimelineItem(filter: $filter) {
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
export const onUpdateTimelineItem = /* GraphQL */ `
  subscription OnUpdateTimelineItem(
    $filter: ModelSubscriptionTimelineItemFilterInput
  ) {
    onUpdateTimelineItem(filter: $filter) {
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
export const onDeleteTimelineItem = /* GraphQL */ `
  subscription OnDeleteTimelineItem(
    $filter: ModelSubscriptionTimelineItemFilterInput
  ) {
    onDeleteTimelineItem(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
