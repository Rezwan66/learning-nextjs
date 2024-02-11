export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div className="mt-10">
      <h2>Comments:</h2>
      <ul>
        {comments.map(c => (
          <li className="my-3" key={c.id}>
            {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
