import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Thank You for Submitting Your Details!</h1>
      <p className="mb-4">Your form has been successfully submitted. We look forward to your stay.</p>
      <button onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2">
        Go to Home
      </button>
    </div>
  );
};

export default ThankYou;
