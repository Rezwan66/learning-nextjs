'use client';
const Button = () => {
  return (
    <div className="mt-5">
      <button
        className="bg-green-500 px-4 py-1 rounded-lg hover:bg-green-300"
        onClick={() => console.log('Clicked!')}
      >
        Click Here
      </button>
    </div>
  );
};
export default Button;
