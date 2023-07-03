

function range(start, end, step) {
  let newArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end || step <= 0) {
    return [];
  } else {
    for (let x = start; x <= end; x = x + step) {
      newArray.push(x);
    }
  }
  return newArray;
}


// test cases from exercise

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));