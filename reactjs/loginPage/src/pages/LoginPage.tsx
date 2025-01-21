import React from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <LoginForm />
      </motion.div>

    </motion.div>
  );
};

export default LoginPage;
