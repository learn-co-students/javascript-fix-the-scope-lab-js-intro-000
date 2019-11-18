var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  function setAnimal(){
    var animal = 'cat';
  return animal;
  }
  return setAnimal();
}


function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();