import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
