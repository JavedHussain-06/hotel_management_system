import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";
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
    <div
      className="min-h-screen flex w-screen items-center justify-center bg-gray-800"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-screen min-h-screen flex items-center justify-center bg-transparent backdrop-blur-sm">
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
          className="max-w-sm mx-auto mt-10 p-6 rounded-lg bg-transparent border shadow-white backdrop-blur-xl overflow-hidden"
        >
          {/* Explosion effect: Animating the elements as they explode */}
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={isSubmitted ? { x: [-50, 50], opacity: 0 } : { scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 , ease: "easeInOut" }}
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
            animate={
              isSubmitted
                ? { x: [-100, 100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut" , delay: 0.1}}
          />
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            whileFocus={{ scale: 1.05 }}
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
            transition={{ duration: 0.5 , ease: "easeInOut" , delay: 0.1}}
          >
            Login
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isSubmitted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 , ease: "easeInOut" }}
            className="mt-4 text-gray-950"
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-white underline hover:text-gray-300"
            >
              Register here
            </Link>
          </motion.p>
        </motion.form>
      </div>
    </div>
  );
};

export default LoginForm;
