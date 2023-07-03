
  function smartGarbage(trash, bins) {
    console.log(bins[trash]); // accessing the correct element of the object, should equal 2
    bins[trash] = bins[trash] + 1 // updating value of object, should equal 3
    return bins; // return object with updated values
  }
  
  smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });