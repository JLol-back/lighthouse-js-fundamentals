
/*
If number provided to function is divisble by 100 with no remainder, then the number of 'hundreds' is equal to the initial number divided by 100. 
If number provided to function divided by 100 DOES have a remainder, then we subtract the remainder from the original number before dividing it by 100 and assigning that value to 'hundreds'.
*/


function howManyHundreds(num) {
  let hundreds = 0;
  if (num % 100 === 0) {
    hundreds = num / 100;
  } else {
    hundreds = (num - num % 100) / 100;
  }
  return hundreds;
}

/* test cases from exercise

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

*/