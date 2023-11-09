import React, { useState } from 'react';

const CaffeineSimulationForm = () => {
  const [formData, setFormData] = useState({
    initialCaffeineConcentration: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/simulateCaffeineDegradation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Simulation Result:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Caffeine Degradation Simulation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Initial Caffeine Concentration:
            <input
              type="number"
              name="initialCaffeineConcentration"
              value={formData.initialCaffeineConcentration}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Time (hours):
            <input
              type="number"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Simulate</button>
      </form>
    </div>
  );
};

export default CaffeineSimulationForm;
