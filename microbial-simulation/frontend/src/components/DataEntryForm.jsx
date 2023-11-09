import React, { useState } from 'react';

function DataEntryForm({ onSubmit }) {
  const [initialCaffeineConcentration, setInitialCaffeineConcentration] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ initialCaffeineConcentration, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Initial Caffeine Concentration:
          <input
            type="number"
            value={initialCaffeineConcentration}
            onChange={(e) => setInitialCaffeineConcentration(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Time (hours):
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DataEntryForm;
