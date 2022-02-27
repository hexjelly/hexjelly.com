import { useLoaderData } from 'remix';
import type { LoaderFunction, HeadersFunction } from 'remix';
import { Post } from 'types/post';
import { client } from '~/lib/datoCMS.server';
import {  gql } from 'graphql-request'

const GET_POST_QUERY = gql`query Post($slug: String) {
  post(filter: { slug: { eq: $slug } }) {
    slug
    title
  }
}`;
export const loader: LoaderFunction = async ({ params: { slug } }) => {
  if (!slug) throw Error('Expected slug');
  return client.request(GET_POST_QUERY, { slug });
};

const CACHE_TIME = 60 * 60;
export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  return {
    'Cache-Control': `max-age=${CACHE_TIME}, s-maxage=${CACHE_TIME}`,
  };
};

export default function Post() {
  const { post }: { post: Post } = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
