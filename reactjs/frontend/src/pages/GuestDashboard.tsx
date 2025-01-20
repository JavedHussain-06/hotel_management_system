import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Guest } from '../types/Guest';
import { getGuestsByHotel, deleteGuest } from '../services/guestServices';
import { motion } from 'framer-motion';

const GuestDashboard: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();  // hotelId fetched from URL params
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  // Ensure that hotelId is being used
  useEffect(() => {
    if (hotelId) {
      fetchGuests(hotelId); // Pass hotelId to fetch the data
    }
  }, [hotelId]);

  const fetchGuests = async (hotelId: string) => {
    try {
      setLoading(true);
      const data = await getGuestsByHotel(hotelId); // Use hotelId to get the guests for the specific hotel
      setGuests(data);  // Set guests data
    } catch (error) {
      console.error('Error fetching guests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteGuest(id); // Call delete function
      setGuests(guests.filter((guest) => guest.id !== id)); // Remove guest optimistically
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  const handlePrint = () => {
    window.print(); // Print the current page
  };

  if (loading) {
    return <p>Loading guest details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Guest Admin Panel</h1>
  
  <motion.button
    onClick={handlePrint}
    className="bg-blue-500 text-white px-4 py-2 mb-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: 'easeInOut' , delay: 0.2 }}
  >
    Print Guest List
  </motion.button>

  <motion.table
    className="w-full border-collapse border border-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2">Full Name</th>
        <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
        <th className="border border-gray-300 px-4 py-2">Email</th>
        <th className="border border-gray-300 px-4 py-2">Address</th>
        <th className="border border-gray-300 px-4 py-2">Purpose of Visit</th>
        <th className="border border-gray-300 px-4 py-2">Stay Dates</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {guests.map((guest) => (
        <motion.tr
          key={guest.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.6 }}
        >
          <td className="border border-gray-300 px-4 py-2">{guest.fullName}</td>
          <td className="border border-gray-300 px-4 py-2">{guest.mobileNumber}</td>
          <td className="border border-gray-300 px-4 py-2">{guest.email}</td>
          <td className="border border-gray-300 px-4 py-2">{guest.address}</td>
          <td className="border border-gray-300 px-4 py-2">{guest.purposeOfVisit}</td>
          <td className="border border-gray-300 px-4 py-2">
            {guest.stayFrom.toLocaleDateString()} - {guest.stayTo.toLocaleDateString()}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <motion.button
              className="bg-blue-500 text-white px-2 py-1 mr-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              View
            </motion.button>
            <motion.button
              className="bg-yellow-500 text-white px-2 py-1 mr-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Edit
            </motion.button>
            <motion.button
              className="bg-red-500 text-white px-2 py-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleDelete(guest.id)}
            >
              Delete
            </motion.button> 
          </td>
        </motion.tr>
      ))}
    </tbody>
  </motion.table>
</div>
  );
};

export default GuestDashboard;
