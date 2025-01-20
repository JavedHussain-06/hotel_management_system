import React from 'react';
import HotelTable from '../components/HotelTable';
import { motion } from 'framer-motion';

const AdminDashboard: React.FC = () => {
  return (
    
<div>
  <motion.div
    className="container mx-auto p-4"
    initial={{ opacity: 0, y: 20 }}  
    animate={{ opacity: 1, y: 0 }}   
    transition={{ duration: 0.6 }}  
  >
    <motion.h1
      className="text-2xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.6 }}  
    >
      Admin Dashboard
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, y: 20 }}   
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.6, delay: 0.2 }} 
    >
      <HotelTable />
    </motion.div>
  </motion.div>
</div>
  );
};

export default AdminDashboard;
