const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)


// Final function

const carPassing = function (cars, speed) {
  // grab value of speed passed into function and assign it to a new variable so we can add it to the object
  let x = speed;
  //create new car object where we set the values based on built in timestamp js method and the speed that was fed into the function 
  let newCar = {
    time: Date.now(),
    speed: x
  }
  // push newCar object into the existing cars array and return the cars array, no including the new car
  cars.push(newCar);
  return (cars);
}