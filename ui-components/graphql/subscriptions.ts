/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
      createdAt
      id
      source
      type
      updatedAt
      __typename
    }
  }
`;
export const onCreateTimelineItem = /* GraphQL */ `
  subscription OnCreateTimelineItem(
    $filter: ModelSubscriptionTimelineItemFilterInput
  ) {
    onCreateTimelineItem(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
      createdAt
      id
      source
      type
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
      createdAt
      id
      source
      type
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
