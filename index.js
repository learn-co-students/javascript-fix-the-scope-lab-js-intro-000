var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
var animal = 'cat';
return animal
}

function add2(n) {
  return n + 2

  const two = 2
}

// function printName(name) {
//   console.log(name)
// }
//
// printName("Roxana")
//
// var samePrintName = function(name) {
//   console.log(name)
// }
//
// samePrintName("Roxana")
//
// function giveAPrintFunction() {
//   return printName
// }
// var fn = giveAPrintFunction()
// fn("Roxana")
//
//
//
// inner("Roxana")
//
// function outer() {
//   var example = "Greetings "
//   return function inner(name) {
//     return example + name
//   }
// }
//
//
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
//
// var thisIsAFunction = funkyFunction()
// var funky = thisIsAFunction()


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var ffunction = funkyFunction()
var theFunk = ffunction()
