var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  var yourAnimal = 'cat'
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimal
}

const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  theFunk = 'FUNKY!';
  return function() {
    return theFunk
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk;
theFunk = funkyFunction();
theFunk();
