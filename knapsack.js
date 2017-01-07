ar knapsack = require('knapsack-js');
 
var items = [
      {"pear": 1},
      {"apple": 7},
      {"grape": 0},
      {"banana": 2},
      {"orange": "NA"},
      {"strawberry": 4},
      {"mandarin": null},
      {"durian": 1},
      {"peach": undefined},
      {}
    ];
 
knapsack.resolve(5, items);
// [ { strawberry: 4 }, { pear: 1 } ] 
 
knapsack.resolve(1, items);
// [ { pear: 1 } ] 
 
knapsack.resolve(7, items);
// [ { apple: 7 } ] 
 
knapsack.resolve(15, items);
/*
[ { apple: 7 },
  { strawberry: 4 },
  { banana: 2 },
  { pear: 1 },
  { durian: 1 } ]
*/