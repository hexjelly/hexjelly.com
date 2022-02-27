import { GraphQLClient } from 'graphql-request'

const preview = process.env.DATOCMS_ENVIRONMENT ? `/environments/${process.env.DATOCMS_ENVIRONMENT}` : '';
const endpoint = `https://graphql.datocms.com${preview}`;

export const client =  new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
  },
})
