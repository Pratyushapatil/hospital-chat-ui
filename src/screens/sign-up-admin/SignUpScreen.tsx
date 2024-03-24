import React, { useState } from 'react';
import './SignUpScreen.style.css';

interface SignUpADminFormData {
  adminPhoneNumber: string;
  adminName: string;
  adminRole: string;
}

const SignUpAdminScreen: React.FC = () => {
  const [formData, setFormData] = useState<SignUpADminFormData>({
    adminPhoneNumber: '',
    adminName: '',
    adminRole: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignUp = (): void => {
    // Handle sign up logic here, e.g., send data to server
    //console.log('Signing up...');
    console.log('Phone Number:', formData.adminPhoneNumber);
    console.log('Admin Name:', formData.adminName);
    console.log('Admin Role:', formData.adminRole);
  };

  return (
    <div>
      <title>Register Member</title>
      <form>
        <div>
        <h2>Register Hospital Member</h2>
          <label htmlFor="adminName"> Member Name*:</label>
          <input
            type="text"
            id="adminName"
            value={formData.adminName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="adminRole">Member Role*:</label>
          <input
            type="text"
            id="adminRole"
            value={formData.adminRole}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="adminPhoneNumber">Phone Number*:</label>
          <input
            type="tel"
            id="adminPhoneNumber"
            value={formData.adminPhoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleSignUp}>
         Register
        </button>
      </form>
    </div>
  );
};

export default SignUpAdminScreen;
