import getAllPosts from '@/lib/getAllPosts';

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div className="mt-6">
      <h1> All Posts: {posts.length} </h1>
    </div>
  );
}
