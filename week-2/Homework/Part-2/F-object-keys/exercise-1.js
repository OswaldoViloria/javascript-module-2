/*

Return the keys and values of the following object

*/

let capitalCities = {
  scotland: 'Edinburgh',
  kenya: 'Nairobi',
  australia: 'Canberra',
  canada: 'Ottawa'
};

let highScores = {
  55: 'Alistair',
  100: 'David',
  89: 'Hannah',
  34: ['Sergi', 'Frank',]
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = console.log(Object.keys(capitalCities));
let highScoresKeys = console.log(Object.keys(highScores));
let capitalCitiesValues = console.log(Object.values(capitalCities));
let highScoresValues = console.log(Object.values(highScores)) ;s

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys)
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues)
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']