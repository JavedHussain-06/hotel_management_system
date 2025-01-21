import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
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
                  transition: { duration: 1, ease: "easeInOut" , delay: 0.1},
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
            transition={{ duration: 0.5 , ease: "easeInOut", delay: 0.1 }}
          >
            Register
          </motion.h2>
          {error && (
            <motion.div
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" , delay: 0.1}}
            >
              {error}
            </motion.div>
          )}
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            whileFocus={{ scale: 1.05 }}
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
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            whileFocus={{ scale: 1.05 }}
            className="w-full mb-4 p-2 border rounded"
            required
            animate={
              isSubmitted
                ? { x: [100, -100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut" , delay  : 0.1}}
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
            animate={
              isSubmitted
                ? { x: [-100, 100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut" , delay: 0.1}}
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
            animate={
              isSubmitted
                ? { x: [100, -100], opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut" ,delay: 0.1 }}
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
            transition={{ duration: 0.5 , ease: "easeInOut" , delay: 0.2}}
          >
            Register
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default RegistrationForm;
