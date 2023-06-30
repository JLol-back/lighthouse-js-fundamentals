for (let i = 100; i > 99 && i < 201; i++) {
  // Loop through printing all numbers between 100 and 200 inclusive 
  if ((i % 3 === 0) && (i % 4 === 0)) {
    // if number can be divisible by BOTH 3 and 4 with no remainder, print LoopyLighthouse. Prioritized this one to ensure the others wouldn't throw a true first.
    console.log("LoopyLighthouse");
  }
    else if (i % 3 === 0) {
    // if number can be divisible by 3 with no remainder, print Loopy
    console.log("Loopy");
  }
  else if (i % 4 === 0) {
    // if number can be divisible by 4 with no remainder, print Lighthouse
    console.log("Lighthouse");
  }
  else if ((i % 3 === 0) && (i % 4 === 0)) {
    // if number can be divisible by BOTH 3 and 4 with no remainder, print LoopyLighthouse
    console.log("LoopyLighthouse");
  } else {
    console.log(i);
  }
}
