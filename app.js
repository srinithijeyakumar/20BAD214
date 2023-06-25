import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get('API_ENDPOINT'); // Replace 'API_ENDPOINT' with your actual API endpoint
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <ul>
        {trains.map((train, index) => (
          <li key={index}>
            <p>Train Number: {train.trainNumber}</p>
            <p>Departure Time: {train.departureTime}</p>
            <p>Arrival Time: {train.arrivalTime}</p>
            <p>Seats Available: {train.seatsAvailable}</p>
            <p>Pricing: {train.pricing}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
