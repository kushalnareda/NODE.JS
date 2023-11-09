function exponentialGrowth(N0, r, t) {
    return N0 * Math.exp(r * t);
  }
  
  function logisticGrowth(N0, K, r, t, adjustRates) {
    if (adjustRates) {
      // Adjust replication rates based on interactions
      if (presenceOfPseudomonasPutidaIF3) {
        r *= 1.5; // Increase replication rate by 50%
      }
  
      if (interactionWithEscherichiaColi) {
        r *= 1.2; // Increase replication rate by 20%
      }
  
      if (interactionWithStaphylococcusAureus) {
        r *= 1.2; // Increase replication rate by 20%
      }
  
      if (interactionWithCandidaAlbicans) {
        r *= 1.2; // Increase replication rate by 20%
      }
    }
  
    return K / (1 + (K - N0) / (N0 * Math.exp(-r * t)));
  }
  
  module.exports = {
    exponentialGrowth,
    logisticGrowth,
  };
  