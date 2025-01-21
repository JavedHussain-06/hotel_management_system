import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try{

      alert('Login successful!');
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
        Login
      </motion.h2>
      {error && <div className="text-red-500">{error}</div>}
      <motion.input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        whileFocus={{ scale: 1.05 }}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <motion.input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        Login
      </motion.button>
    </motion.form>
  );
};

export default LoginForm;
