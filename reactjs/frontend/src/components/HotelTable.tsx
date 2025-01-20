import React, { useEffect, useState } from 'react';
import { Hotel } from '../types/Hotel';
import { getHotels, deleteHotel } from '../services/hotelServices';
import { QRCodeCanvas } from 'qrcode.react';

const HotelTable: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  // Dummy data for hotels (if no real API is available yet)
  const dummyHotels: Hotel[] = [
    {
      id: '1',
      name: 'Hotel Sunrise',
      address: '123 Beach Ave, Miami, FL',
      logoUrl: 'https://via.placeholder.com/150',
      qrCodeUrl: 'http://yourdomain.com/guest/1',
    },
    {
      id: '2',
      name: 'Hotel Oceanview',
      address: '456 Ocean Blvd, California, CA',
      logoUrl: 'https://via.placeholder.com/150',
      qrCodeUrl: 'http://yourdomain.com/guest/2',
    },
  ];

  useEffect(() => {
    // If no backend is available, use the dummy data
    setHotels(dummyHotels);

    // Otherwise, use this for fetching real data
    // fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const data = await getHotels();
    setHotels(data);
  };

  const handleDelete = async (id: string) => {
    await deleteHotel(id);
    fetchHotels(); // Refetch data after deletion
  };

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Hotel Name</th>
          <th className="border border-gray-300 px-4 py-2">Address</th>
          <th className="border border-gray-300 px-4 py-2">Logo</th>
          <th className="border border-gray-300 px-4 py-2">QR Code</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel) => (
          <tr key={hotel.id}>
            <td className="border border-gray-300 px-4 py-2">{hotel.name}</td>
            <td className="border border-gray-300 px-4 py-2">{hotel.address}</td>
            <td className="border border-gray-300 px-4 py-2">
              <img src={hotel.logoUrl} alt={`${hotel.name} Logo`} className="w-12 h-12" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <QRCodeCanvas value={hotel.qrCodeUrl} />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                onClick={() => handleDelete(hotel.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HotelTable;
