import getPost from '@/lib/getPost';

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
  const post = await getPost(id);
  return (
    <div className="mt-6">
      <h1 className="text-blue-500 text-xl font-bold mb-3"> {post.title} </h1>
      <p>{post.body}</p>
    </div>
  );
}
