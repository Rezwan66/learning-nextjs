import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getAllPosts();
  //   console.log(posts);
  return (
    <div className="mt-6">
      <h1 className="mb-4 text-xl"> All Posts: {posts.length} </h1>
      <ul>
        {posts.map(post => (
          <li
            className="border-2 max-w-[800px] hover:bg-blue-200"
            key={post.id}
          >
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
