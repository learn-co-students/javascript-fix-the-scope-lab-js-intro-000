var animal = 'cat'

function myAnimal() {
  var animal = 'dog';
  return animal
}

function yourAnimal() {
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var theFunk = 'FUNKY!'
var funkyFunction = function() {
  return function() {
    return theFunk
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
