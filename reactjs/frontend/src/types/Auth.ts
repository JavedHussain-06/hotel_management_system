export interface AdminUser {
    id: string;              // Unique identifier for the admin
    username: string;        // Admin username
    password: string;        // Admin password (should be hashed)
    role: 'MainAdmin' | 'GuestAdmin'; // Admin role type
  }
  
  export interface AuthResponse {
    token: string;           // Authentication token
    user: AdminUser;         // Authenticated admin user details
  }
  