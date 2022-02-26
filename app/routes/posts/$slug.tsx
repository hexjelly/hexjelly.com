import { useLoaderData } from 'remix';
import type { LoaderFunction, HeadersFunction } from 'remix';
import { Post } from 'types/post';
import { load } from '~/lib/datoCMS.server';

const GET_POST_QUERY = `query Post($slug: String) {
  post(filter: { slug: { eq: $slug } }) {
    slug
    title
  }
}`;
export const loader: LoaderFunction = async ({ params: { slug } }) => {
  if (!slug) throw Error('Expected slug');
  return load({
    query: GET_POST_QUERY,
    variables: { slug },
  });
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
