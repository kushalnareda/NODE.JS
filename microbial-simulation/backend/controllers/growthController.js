const { simulateCaffeineDegradation } = require('../caffeineDegradation');
const express = require('express');
const router = express.Router();


function simulateExponentialGrowth(req, res) {
  const N0 = parseInt(req.query.N0);
  const r = parseFloat(req.query.r);
  const t = parseInt(req.query.t);

  const result = exponentialGrowth(N0, r, t);
  res.json({ result });
}

function simulateLogisticGrowth(req, res) {
  const N0 = parseInt(req.query.N0);
  const K = parseInt(req.query.K);
  const r = parseFloat(req.query.r);
  const t = parseInt(req.query.t);

  const result = logisticGrowth(N0, K, r, t);
  res.json({ result });
}
/*
function simulateCaffeineDegradation(req, res) {
  const initialCaffeineConcentration = parseFloat(req.body.initialCaffeineConcentration);
  const populationSizePseudomonas = parseInt(req.body.populationSizePseudomonas);
  const time = parseInt(req.body.time);

  const finalCaffeineConcentration = simulateCaffeineDegradation(
    initialCaffeineConcentration,
    populationSizePseudomonas,
    time
  );

  res.json({ finalCaffeineConcentration });
}
*/

router.use('/some-path', (req, res, next) => {
  // Middleware logic here
  next(); // Don't forget to call next() to pass control to the next middleware function
});

module.exports = {
  simulateExponentialGrowth,
  simulateLogisticGrowth,
  simulateCaffeineDegradation,
};
