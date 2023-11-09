const { simulateCaffeineDegradation } = require('./caffeineDegradation');
const growthController = require('./controllers/growthController');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'microbial_simulation'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

global.db = connection;

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Microbial Simulation API');
});

app.get('/exponential-growth', growthController.simulateExponentialGrowth);
app.get('/logistic-growth', growthController.simulateLogisticGrowth);
app.get('/api/exponential-growth', growthController.simulateExponentialGrowth);
app.get('/api/logistic-growth', growthController.simulateLogisticGrowth);

app.post('/simulateCaffeineDegradation', (req, res) => {
    const { initialCaffeineConcentration, time } = req.body;
    const result = simulateCaffeineDegradation(initialCaffeineConcentration, time);
    res.json(result);
  });
  

  
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
