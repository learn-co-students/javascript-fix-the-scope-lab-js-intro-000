var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
// outerFunction = funkyFunction()
//   function outerFunction() {
//   return function() {
//   return (" ")
//  }
// }
//
// var multiplyBy = function(factor) {
//   return function(n) {
//     return factor * n;
//   }
// }
//
// var multiplyBy2 = multiplyBy(2);
// console.log(multiplyBy2(4)); // 8
//
// multiplyBy(2)(4); // 8
//
// var multiplyBy3 = multiplyBy(3); // a function that multiplies by 3
// console.log(multiplyBy3(4)); // 12
//
