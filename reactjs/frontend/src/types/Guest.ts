export interface Guest {
    id: string;                          
    fullName: string;                    
    mobileNumber: string;                
    address: string;                     
    purposeOfVisit: 'Business' | 'Personal' | 'Tourist'; 
    stayFrom: Date;                     
    stayTo: Date;                       
    email: string;                      
    idProofNumber: string;               
    hotelId: string;             
    createdAt?: Date;                    
    updatedAt?: Date;                    
  }
  