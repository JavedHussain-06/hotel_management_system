export interface Hotel {
    id: string;               // Unique identifier for the hotel
    name: string;             // Hotel name
    address: string;          // Hotel address
    logoUrl: string;          // URL of the hotel logo
    qrCodeUrl: string;        // URL of the generated QR code
    createdAt?: string;       // Hotel creation timestamp
    updatedAt?: string;       // Last updated timestamp
  }
  