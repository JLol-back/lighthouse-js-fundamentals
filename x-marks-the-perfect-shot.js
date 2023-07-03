// Solution passed

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let position = [];

  for (const move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }

  position.push(x, y);
  return (position);
}






/* the below solution works, but isn't in the finalPosition function

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let x = 0;
let y = 0;
let position = [];

  for (const move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }

position.push(x , y);
console.log(position)
*/