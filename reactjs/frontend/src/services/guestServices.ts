import api from './api';  // Import the Axios instance

// Fetch guests by hotel ID
export const getGuestsByHotel = async (hotelId: string) => {
  try {
    const response = await api.get(`/hotels/${hotelId}/guests`);  // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching guests:', error);
    throw error;
  }
};

// Add a new guest
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addGuest = async (guestData: any) => {
  try {
    const response = await api.post('/guests', guestData);  // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error adding guest:', error);
    throw error;
  }
};

// Delete a guest
export const deleteGuest = async (guestId: string) => {
  try {
    const response = await api.delete(`/guests/${guestId}`);  // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error deleting guest:', error);
    throw error;
  }
};
