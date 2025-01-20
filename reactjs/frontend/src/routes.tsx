import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import GuestDashboard from './pages/GuestDashboard';
import GuestLanding from './pages/GuestLanding';
import ThankYou from './pages/ThankYou';
import { Hotel } from './types/Hotel';  // Ensure you import the Hotel type

const RoutesConfig: React.FC = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null);

  // Dummy hotel data to show on the home page if no hotelId is provided
  const dummyHotel: Hotel = {
    id: '1',
    name: 'Hotel Sunrise',
    address: '123 Beach Ave, Miami, FL',
    logoUrl: 'https://via.placeholder.com/150',
    qrCodeUrl: 'http://example.com/guest/1',
  };

  useEffect(() => {
    // Simulating fetching hotel data when the user lands on the home page
    setHotel(dummyHotel);
  }, []);

  const handlePrint = () => {
    window.print();  // Print the entire page
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/guest/:hotelId" element={<GuestLanding />} />
        <Route path="/guest/admin/:hotelId" element={<GuestDashboard />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/"
          element={
            <div className="container mx-auto p-4">
              {hotel ? (
                <div>
                  <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
                  <p className="mb-4">Address: {hotel.address}</p>
                  <img src={hotel.logoUrl} alt={`${hotel.name} Logo`} className="w-24 h-24 mb-4" />
                  <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2">
                    Print Page
                  </button>
                </div>
              ) : (
                <p>Loading hotel details...</p>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
