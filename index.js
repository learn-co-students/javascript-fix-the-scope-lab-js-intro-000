function myAnimal() {
  var myanimal = 'dog'
  return myanimal
}
function yourAnimal() {
  var youranimal = 'cat'
  return youranimal
}
function add2(n) {
  return 2 + n
}
function funkyFunction() {
  return function giveusthis() {
 }
}
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()() 
