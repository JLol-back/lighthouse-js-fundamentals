function concat(array1, array2) {
  let array3 = array1.concat(array2);
  return array3;
}



let facebookProfile = {
  name: "Jake",
  friends: 10,
  messages: ["message 1", "message 2", "message 3"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice([index], 1);
  },
  addFriend: function () {
    facebookProfile.friends = friends++;
  },
  removeFriend: function () {
    facebookProfile.friends = friends--;
  }
}


array.forEach(element => {
  
});


var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(console.log(donuts.type + " donuts cost $" + donuts.cost + "each" ));


array.forEach(element => {
  
});