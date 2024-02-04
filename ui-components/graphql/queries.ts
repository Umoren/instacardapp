/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      createdAt
      id
      source
      type
      updatedAt
      __typename
    }
  }
`;
export const getTimelineItem = /* GraphQL */ `
  query GetTimelineItem($id: ID!) {
    getTimelineItem(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      createdAt
      id
      profilePic
      updatedAt
      username
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        body
        commentAuthorId
        createdAt
        id
        timelineItemCommentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContents(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        source
        type
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTimelineItems = /* GraphQL */ `
  query ListTimelineItems(
    $id: ID
    $filter: ModelTimelineItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTimelineItems(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        profilePic
        updatedAt
        username
        __typename
      }
      nextToken
      __typename
    }
  }
`;
