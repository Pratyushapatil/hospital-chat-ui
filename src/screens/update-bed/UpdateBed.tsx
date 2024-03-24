import React, { useState } from 'react';
import './SignUpForm.style.css';

interface UpdateBedFormData {
  patientName: string;
  existingBedNumber: string;
  bedNumber: string;
}

const UpdateBedScreen: React.FC = () => {
  const [formData, setFormData] = useState<UpdateBedFormData>({
    patientName: '',
    existingBedNumber: '',
    bedNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleUpdateBed = (): void => {
    // Handle sign up logic here, e.g., send data to server
    //console.log('Signing up...');
    console.log('Phone Number:', formData.patientName);
    console.log('Existing Bed Number:', formData.existingBedNumber);
    console.log('Bed Number:', formData.bedNumber);
  };

  return (
    <div>
      <h2>Update Bed Number</h2>
      <form>
        <div>
          <label htmlFor="patientName">Patient Name*:</label>
          <input
            type="text"
            id="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="patientName">Existing Bed Number*:</label>
          <input
            type="text"
            id="existingBedNumber"
            value={formData.existingBedNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bedNumber">Bed Number*:</label>
          <input
            type="text"
            id="bedNumber"
            value={formData.bedNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleUpdateBed}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBedScreen;
