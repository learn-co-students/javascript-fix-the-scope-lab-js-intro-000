var animal = 'dog'

function myAnimal() {
  return animal
}

var animals ="cat"
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animals
}

function add2(n) {
  return n + 906

  // Feel free to move things around!
  const two = 2
  const n = 904
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
