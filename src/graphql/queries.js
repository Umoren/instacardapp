/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimelineItem = /* GraphQL */ `
  query GetTimelineItem($id: ID!) {
    getTimelineItem(id: $id) {
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
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        body
        author {
          id
          username
        }
        timelineItemCommentId
        commentAuthorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        profilePic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      source
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $id: ID
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        source
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
