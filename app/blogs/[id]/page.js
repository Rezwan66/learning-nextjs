import { notFound } from 'next/navigation';

const BlogPage = ({ params }) => {
  const { id } = params;

  if (id === '3') {
    notFound();
  }

  return (
    <>
      <div>
        <h2 className="mt-6"> The Blog ID is: {id} </h2>
      </div>
    </>
  );
};
export default BlogPage;
