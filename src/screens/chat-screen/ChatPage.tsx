import React, { useState } from 'react';
import './ChatPage.style.css';

interface DeleteAdminData {
  adminName: string;
  adminRole: string;
 
}

const DeleteAdminScreen: React.FC = () => {
  const [formData, setFormData] = useState<DeleteAdminData>({
    adminName: '',
    adminRole: '',

  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDeleteAdmin = (): void => {
    // Handle sign up logic here, e.g., send data to server
    //console.log('Signing up...');
    console.log('Member Name:', formData.adminName);
    console.log('Member Role:', formData.adminRole);
  
  };

  return (
    <div>
      <h2>Delete Member</h2>
      <form>
        <div>
          <label htmlFor="adminName">Member Name:</label>
          <input
            type="text"
            id="adminName"
            value={formData.adminName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="adminRole">Admin Role:</label>
          <input
            type="text"
            id="patientName"
            value={formData.adminRole}
            onChange={handleInputChange}
            required
          />
        </div>
       
        <button type="button" onClick={handleDeleteAdmin}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteAdminScreen;
