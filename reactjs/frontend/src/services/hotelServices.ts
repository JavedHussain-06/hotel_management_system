import api from './api';
import { Hotel } from '../types/Hotel';

// Fetch all hotels
export const getHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await api.get('/hotels');
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw new Error('Could not fetch hotels.');
  }
};

// Add a new hotel
export const addHotel = async (hotelData: FormData): Promise<Hotel> => {
  try {
    const response = await api.post('/hotels', hotelData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding hotel:', error);
    throw new Error('Could not add hotel.');
  }
};

// Get details of a specific hotel
export const getHotelById = async (id: string): Promise<Hotel> => {
  try {
    const response = await api.get(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching hotel with id ${id}:`, error);
    throw new Error(`Could not fetch hotel with id ${id}.`);
  }
};

// Delete a hotel
export const deleteHotel = async (id: string): Promise<void> => {
  try {
    await api.delete(`/hotels/${id}`);
  } catch (error) {
    console.error(`Error deleting hotel with id ${id}:`, error);
    throw new Error(`Could not delete hotel with id ${id}.`);
  }
};
