import api from './api';
import { AuthResponse } from '../types/Auth';

// Login admin user
export const login = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

// Validate authentication token
export const validateToken = async (token: string): Promise<boolean> => {
  const response = await api.get('/auth/validate', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.valid;
};
