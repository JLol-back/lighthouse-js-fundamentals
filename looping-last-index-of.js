
function lastIndexOf (array, value) {
  let lastSeen = 0;
  for (let i = 0; i < array.length; i++) {
    if (array.length < 1) {
      lastSeen = -1;
    } else if (array[i] === value) {
      lastSeen = i;
    } 
  } return lastSeen;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


console.log(lastIndexOf([0,0,0,0,0],1)) // to.be.equal(-1);

expect(lastIndexOf([],1)) //to.be.equal(-1);


// Feels like a janky solutation but it ... worked?

function lastIndexOf(array, value) {
  let lastSeen = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      lastSeen = i;
    }
  } return lastSeen;
}
