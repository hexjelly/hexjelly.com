import { Link, useLoaderData } from 'remix';
import type { LoaderFunction, HeadersFunction } from 'remix';
import { load } from '~/lib/datoCMS.server';
import { Post } from 'types/post';

const POSTS_QUERY = `{
  posts: allPosts {
    id
    title
    slug
    publishedAt
    updatedAt
    _status
    _firstPublishedAt
  }
}`;
export const loader: LoaderFunction = async () => {
  return load({
    query: POSTS_QUERY,
    variables: { limit: 10 },
  });
};

const CACHE_TIME = 60 * 60;
export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  return {
    'Cache-Control': `max-age=${CACHE_TIME}, s-maxage=${CACHE_TIME}`,
  };
};

export default function Posts() {
  const { posts }: { posts: Array<Post> } = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
