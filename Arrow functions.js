let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let es5OddNumbers = numbers.filter(function(number) {
  return number % 2;
});
console.log(es5OddNumbers);


let es6OddNumbers = numbers.filter(number => number % 2);
console.log(es6OddNumbers);


let square = x => x * x;
console.log(square(10));

let add = (a, b) => a + b;
console.log(add(3, 4));