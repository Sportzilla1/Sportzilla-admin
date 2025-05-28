// client/src/components/TournamentRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const TournamentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    game: '',
    // other fields
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tournaments/register', formData);
      if (response.data.success) {
        alert('Registration successful!');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <select name="game" value={formData.game} onChange={handleChange} required>
        <option value="">Select Game</option>
        <option value="eFootball">eFootball</option>
        <option value="PUBG">PUBG</option>
        <option value="Free Fire">Free Fire</option>
        <option value="FC 25">FC 25</option>
      </select>
      {/* other fields */}
      <button type="submit">Register</button>
    </form>
  );
};

export default TournamentRegistration;
