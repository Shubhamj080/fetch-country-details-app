import React, { useState } from 'react';
import './App.css';

function App() {
  const [country, setName] = useState('');
  const [countryDetails, setDetails] = useState([]);
  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/country?name=${country}`);
      if (response.ok) {
        const jsonData = await response.json();
        setDetails(jsonData);
      } else {
        console.error('Data not available.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
   <div class="container">
    <div class="control">
      <h1>Country Details</h1>
      <input
        class="control__input"
        type="text"
        placeholder="Enter a country name"
        value={country}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br><br></br>
      <button class = "bubble-btn" onClick={fetchDetails}>Fetch Details</button>

      {countryDetails && (
        <div>
          <p><b>Population:</b> {countryDetails.population}</p>
          <p><b>Capital:</b> {countryDetails.capital}</p>
          {/* Add more fields as needed */}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;