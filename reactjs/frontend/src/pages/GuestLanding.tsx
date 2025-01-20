import { useState, useEffect } from 'react';
import GuestForm from '../components/GuestForm';
import { motion } from 'framer-motion';

const GuestLanding = () => {
  interface Hotel {
    id: string;
    name: string;
    address: string;
    logoUrl: string;
  }

  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    // Simulate fetching hotel data
    const fetchHotelData = async () => {
      const dummyHotel = {
        id: '1',
        name: 'Dummy Hotel',
        address: '123 Dummy Street',
        logoUrl: 'https://via.placeholder.com/150',
      };
      setHotel(dummyHotel);
    };

    fetchHotelData();
  }, []);

  return (
    <div className="container mx-auto p-4">
    {hotel ? (
      <div>
        <motion.h1
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.6 }} 
        >
          {hotel.name}
        </motion.h1>
  
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.6, delay: 0.2 }}  
        >
          Address: {hotel.address}
        </motion.p>
  
        <motion.img
          src={hotel.logoUrl}
          alt={`${hotel.name} Logo`}
          className="w-24 h-24 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}    
          transition={{ duration: 0.6, delay: 0.4 }}  
        />
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.6, delay: 0.6 }} 
        >
          <GuestForm hotelId={hotel.id} />
        </motion.div>
      </div>
    ) : (
      <p>Loading hotel details...</p>
    )}
  </div>
  );
};

export default GuestLanding;
