// UserProfile.js

// Add your code here

'use client';
import React, { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: 'Zuka Batdelger',
    email: 'zulbadamz@gmail.com',
    address: {
      street: '123 Main St',
      city: 'Ulaanbaatar',
      country: 'Mongolia',
    },
  });

  // Controlled inputs (optional)
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newCountry, setNewCountry] = useState('');

  const updateAddress = () => {
    setUser(prevUser => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        street: newStreet || prevUser.address.street,
        city: newCity || prevUser.address.city,
        country: newCountry || prevUser.address.country,
      },
    }));

    // Optionally clear input fields
    setNewStreet('');
    setNewCity('');
    setNewCountry('');
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong></p>
      <ul>
        <li><strong>Street:</strong> {user.address.street}</li>
        <li><strong>City:</strong> {user.address.city}</li>
        <li><strong>Country:</strong> {user.address.country}</li>
      </ul>

      <h3>Update Address</h3>
      <input
        type="text"
        placeholder="New Street"
        value={newStreet}
        onChange={e => setNewStreet(e.target.value)}
        data-testid="street-input"
        style={{ margin: '4px' }}
      />
      <input
        type="text"
        placeholder="New City"
        value={newCity}
        onChange={e => setNewCity(e.target.value)}
        data-testid="city-input"
        style={{ margin: '4px' }}
      />
      <input
        type="text"
        placeholder="New Country"
        value={newCountry}
        onChange={e => setNewCountry(e.target.value)}
        data-testid="country-input"
        style={{ margin: '4px' }}
      />
      <br />
      <button onClick={updateAddress} data-testid="update-button" style={{ marginTop: '8px' }}>
        Update Address
      </button>
    </div>
  );
}
