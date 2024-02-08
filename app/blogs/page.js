const Blogs = () => {
  const blogs = [
    { title: 'Blog 1', description: 'Blog 1 description' },
    { title: 'Blog 2', description: 'Blog 2 description' },
  ];
  return (
    <main className="mt-10">
      <h2> Blogs page </h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.title}>{blog.title}</li>
        ))}
      </ul>
    </main>
  );
};
export default Blogs;
