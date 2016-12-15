var animal = 'dog'

function myAnimal() {
  return animal
}

myAnimal();

function yourAnimal() {
  var animal = 'cat';
  return animal
}

yourAnimal();

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
theFunk;
