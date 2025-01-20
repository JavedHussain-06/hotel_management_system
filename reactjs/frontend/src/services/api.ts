import axios from 'axios';

// Using Vite's import.meta.env to access environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',  // Default to local server if not set
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
