const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let winner;
  if (metric === 'redness') {
    let reddest = 0;
    for (let i = 0; i < vegetables.length; i++) {
      if (reddest < vegetables[i].redness) {
        reddest = vegetables[i].redness;
        winner = vegetables[i].submitter;
      }
    }
    return winner;
  } else if (metric === 'plumpness') {
    let plumpest = 0;
    for (let i = 0; i < vegetables.length; i++) {
      if (plumpest < vegetables[i].plumpness) {
        plumpest = vegetables[i].plumpness;
        winner = vegetables[i].submitter;
      }
    }
    return winner;
  } else {
    return "Sorry! your metric doesn't exist";
  }

}

judgeVegetable(vegetables, metric);


///

