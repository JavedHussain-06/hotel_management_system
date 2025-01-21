import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission without backend interaction
    try{

      console.log('Form submitted:', formData);
    }catch(err){
      setError('Invalid credentials ' + err);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border-4"
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Register
      </motion.h2>
      {error && <motion.div 
        className="text-red-500" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.div>}
      <motion.input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        whileFocus={{ scale: 1.05 }}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <motion.input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="Date of Birth"
        whileFocus={{ scale: 1.05 }}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <motion.input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        whileFocus={{ scale: 1.05 }}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <motion.input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        whileFocus={{ scale: 1.05 }}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Register
      </motion.button>
    </motion.form>
  );
};

export default RegistrationForm;
