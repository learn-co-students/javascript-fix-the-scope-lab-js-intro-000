var animal = 'dog'

function myAnimal() {
  return animal
}

var animal = 'dog';

function yourAnimal() {
  var yourAnimal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return (yourAnimal)
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function(){
  return function() {
    return 'FUNKY!'
  }
}

var theFunk = 'FUNKY!';
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
