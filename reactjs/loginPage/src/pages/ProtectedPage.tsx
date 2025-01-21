import React from 'react';

const ProtectedPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Protected Page</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">John Doe</td>
              <td className="border border-gray-300 p-2">john@example.com</td>
              <td className="border border-gray-300 p-2">1990-01-01</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Jane Smith</td>
              <td className="border border-gray-300 p-2">jane@example.com</td>
              <td className="border border-gray-300 p-2">1985-05-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProtectedPage;
