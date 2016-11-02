var animal = 'cat'
function myAnimal() {
  animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
  // Feel free to move things around!
}

function funkyFunction() {
  var funkyMessage = "FUNKY!";
  return function() {
    var funkyMessage = "FUNKY!";
    return funkyMessage;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
theFunk
