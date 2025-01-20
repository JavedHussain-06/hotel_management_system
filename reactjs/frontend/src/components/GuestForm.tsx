import React, { useState } from 'react';
import { Guest } from '../types/Guest';
import { addGuest } from '../services/guestServices';
import { motion } from 'framer-motion';

const GuestForm: React.FC<{ hotelId: string }> = ({ hotelId }) => {
  const [formData, setFormData] = useState<Partial<Guest>>({
    hotelId, // Associate the hotelId with the guest data
    purposeOfVisit: 'Business',  // Default purpose of visit
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add hotelId to the guest data when submitting
      await addGuest(formData as Guest);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting guest form:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-300">
      <h2 className="text-xl font-bold mb-4">Guest Form</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Address"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <label htmlFor="purposeOfVisit" className="block mb-1">Purpose of Visit</label>
      <select id="purposeOfVisit" name="purposeOfVisit" className="w-full mb-3 px-3 py-2 border" onChange={handleChange}>
        <option value="Business">Business</option>
        <option value="Personal">Personal</option>
        <option value="Tourist">Tourist</option>
      </select>
      <input
        type="date"
        name="stayFrom"
        title="Stay From"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="stayTo"
        title="Stay To"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email ID"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="idProofNumber"
        placeholder="ID Proof Number"
        className="w-full mb-3 px-3 py-2 border"
        onChange={handleChange}
        required
      />
      <motion.button  type="submit" className="bg-blue-500 text-white px-4 py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Submit
      </motion.button >
        
    </form>
  );
};

export default GuestForm;
