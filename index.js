var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
// this code is broken below, OG code is 'given'
function add2(n) {
  // Feel free to move things around!
  const two = 2
  return  n + two
  var n = Math.floor(Math.random() * 1000)


}

/* given:
function add2(n) {
  return n + two
  // Feel free to move things around!
  const two = 2
}
*/

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
// orignal code: var theFunk = funkyFunction
 var theFunk = funkyFunction()()
