import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current route and underline the active tab

  // You can set a specific hotelId here or dynamically pass it based on user context or selection
  const hotelId = "1";  // For example, we are using hotelId = "1", replace with dynamic logic

  // Function to check if the current route matches the active tab
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between h-[5rem] items-center">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate('/')}
      >
        Digital Guest Onboarding
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/admin')}
          className={`hover:underline ${isActive('/admin') ? 'underline' : ''} transition-all`}
        >
          Admin Panel
        </button>
        <button
          onClick={() => navigate(`/guest/admin/${hotelId}`)}
          className={`hover:underline ${isActive(`/guest/admin/${hotelId}`) ? 'underline' : ''} transition-all`}
        >
          Guest Panel
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
