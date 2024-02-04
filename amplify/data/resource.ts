import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  TimelineItem: a
    .model({
      id: a.id(),
      description: a.string(),
      postTime: a.datetime(),
      content: a.hasOne('Content'),
      author: a.hasOne('User'),
      comment: a.hasMany('Comment')
    })
    .authorization([a.allow.public()]),

  ContentType: a
    .enum([
      'IMAGE',
      'VIDEO'
    ]),

  Comment: a
    .model({
      id: a.id(),
      body: a.string(),
      author: a.hasOne('User'),
      timelineItem: a.belongsTo('TimelineItem')
    }).authorization([a.allow.public()]),

  User: a
    .model({
      id: a.id(),
      username: a.string(),
      profilePic: a.string(),
    }).authorization([a.allow.public()]),

  Content: a
    .model({
      id: a.id(),
      source: a.string(),
      type: a.ref('ContentType')
    }).authorization([a.allow.public()])

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
