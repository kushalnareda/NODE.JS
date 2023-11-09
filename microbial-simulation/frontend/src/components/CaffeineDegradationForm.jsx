import React, { useState } from 'react';

function CaffeineDegradationForm() {
  const [formValues, setFormValues] = useState({
    initialCaffeineConcentration: '',
    populationSizePseudomonas: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send a POST request with formValues to your backend
    try {
      const response = await axios.post('/simulateCaffeineDegradation', formValues);
      const result = response.data;
      // Handle the result (e.g., display it to the user)
    } catch (error) {
      // Handle any errors (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Initial Caffeine Concentration:
          <input
            type="number"
            name="initialCaffeineConcentration"
            value={formValues.initialCaffeineConcentration}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Population Size of Pseudomonas:
          <input
            type="number"
            name="populationSizePseudomonas"
            value={formValues.populationSizePseudomonas}
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
            value={formValues.time}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Simulate Caffeine Degradation</button>
    </form>
  );
}

export default CaffeineDegradationForm;
