import React, { useState } from 'react';
import './LoginScreen.style.css';

interface LoginFormData {
  phoneNumber: string;
 
}

const LoginScreen: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    phoneNumber: '',
    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLoginIn = (): void => {
    // Handle sign up logic here, e.g., send data to server
    console.log('logining up...');
    console.log('Phone Number:', formData.phoneNumber);
    
  };

  return (
    <div>
      <h2>Login with Phone Number</h2>
      <h5>Get chatting with Doctors and Team today by login in our chat forum</h5>
      <form>
        <div>
          <label htmlFor="phoneNumber">Phone Number*:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
       
        <button type="button" onClick={handleLoginIn}>
          Login In
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
