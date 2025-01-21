import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/5091624-hd_1920_1080_24fps.mp4"; // Path to your video
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // To track submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert("Login successful!");
      setIsSubmitted(true); // Trigger explosion animation on form submit
    } catch (err) {
      setError("Invalid credentials " + err);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to apply backdrop blur and gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

      <div className="w-screen min-h-screen flex items-center justify-center bg-transparent backdrop-blur-sm relative z-20">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 1, y: 0 }}
          animate={
            isSubmitted
              ? {
                  opacity: 0,
                  scale: 0,
                  transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
                }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.5 }}
          className="max-w-sm mx-auto mt-10 p-6 rounded-lg bg-transparent border shadow-white backdrop-blur-xl overflow-hidden sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <motion.h2
            className="text-2xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={isSubmitted ? { x: [-50, 50], opacity: 0 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            Login
          </motion.h2>
          {error && (
            <motion.div
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              {error}
            </motion.div>
          )}
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            required
            animate={
              isSubmitted
                ? { x: [-100, 100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          />
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            required
            animate={
              isSubmitted
                ? { x: [100, -100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full bg-blue-500 text-white py-2 rounded"
            animate={
              isSubmitted
                ? { scale: 2, opacity: 0, rotate: 45 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            Login
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isSubmitted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            className="mt-4 text-gray-300"
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-white underline hover:text-gray-300">
              Register here
            </Link>
          </motion.p>
        </motion.form>
      </div>
    </div>
  );
};

export default LoginForm;
