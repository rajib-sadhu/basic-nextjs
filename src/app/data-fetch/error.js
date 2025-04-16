"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-2xl  my-10">Something is wrong!!</h1>
      <p className="p-5 rounded-md border inline-block">{error.message}</p>
      <div className="mt-5">
        <button
          onClick={() => reset()}
          className="bg-red-500 px-5 py-2 rounded-2xl hover:bg-red-800"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
