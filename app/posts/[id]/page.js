import Comments from '@/app/components/Comments';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;
  return (
    <div className="mt-6">
      <h1 className="text-blue-500 text-xl font-bold mb-3"> {post.title} </h1>
      <p>{post.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
