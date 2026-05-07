import React from 'react';

const AuthDebug = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Auth Debug</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify({ token, user }, null, 2)}</pre>
    </div>
  );
};

export default AuthDebug;
