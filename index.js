var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"// How can we make sure that this function
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

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()()
