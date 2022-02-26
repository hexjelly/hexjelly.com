import tiny from 'tiny-json-http';

type LoadOptions = { query: string; variables: Record<string, string | number | boolean | null>; preview?: boolean };
export async function load({ query, variables, preview = false }: LoadOptions) {
  let endpoint = 'https://graphql.datocms.com';
  if (process.env.DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.DATOCMS_ENVIRONMENT}`;
  }
  if (preview) {
    endpoint += `/preview`;
  }
  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
    },
    data: { query, variables },
  });
  if (body.errors) {
    console.error('Ouch! The query has some errors!', body.errors);
    throw body.errors;
  }
  return body.data;
}
