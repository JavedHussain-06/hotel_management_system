import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import GuestDashboard from './pages/GuestDashboard';
import GuestLanding from './pages/GuestLanding';
import ThankYou from './pages/ThankYou';
import Navbar from './components/Navbar';
import './styles/main.css'; // Assuming you have a global stylesheet for your app

const App: React.FC = () => {
  return (
    <div>
      {/* The Navbar will be available across all pages */}
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          {/* Routes for the Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Routes for the Guest Dashboard */}
          <Route path="/guest/:hotelId" element={<GuestLanding />} />
          <Route path="/guest/admin/:hotelId" element={<GuestDashboard />} />
          
          {/* Thank you page after form submission */}
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Default route (Guest Landing page) */}
          <Route path="/" element={<GuestLanding />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
