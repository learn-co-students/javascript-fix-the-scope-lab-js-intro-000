var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat' // Solution to Error #1 (Line 11)
  return animal
}

const two = 2

function add2(n) {
  return n + two

  // Feel free to move things around!

}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()

function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}
