const BlogPage = ({ params }) => {
  const { id } = params;
  return (
    <>
      <div>
        <h2 className="mt-6"> The Blog ID is: {id} </h2>
      </div>
    </>
  );
};
export default BlogPage;
