import React, { useState } from 'react';
import MicroorganismInteractionsChart from './components/MicroorganismInteractionsChart';
import CaffeineSimulationForm from './components/CaffeineSimulationForm';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2em', color: 'blue', textAlign: 'center' }}>
        TERM PAPER BBL331
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const initialCaffeineConcentration = e.target.elements.initialCaffeineConcentration.value;
          const time = e.target.elements.time.value;
          handleFormSubmit({ initialCaffeineConcentration, time });
        }}
      >
        <div>
          <label>
            Initial Caffeine Concentration:
            <input type="number" name="initialCaffeineConcentration" />
          </label>
        </div>
        <div>
          <label>
            Time (hours):
            <input type="number" name="time" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <router>
      <MicroorganismInteractionsChart formData={formData} />
      <routes></routes>
      </router>
      <router>
      <CaffeineSimulationForm formData={formData}/>
      </router>
    </div>
  );
}


export default App;
