var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "cat";
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()

theFunk;

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// //: you only need to modify the code below this line.
//var theFunk = funkyFunction

// describe('funkyFunction()', function() {
//   it('returns a function', function() {
//     expect(typeof window.funkyFunction()).toEqual('function')
//   })
// })
//
// describe('theFunk', function() {
//   it('is "FUNKY!"', function() {
//     expect(window.theFunk).toEqual('FUNKY!')
//   })
// })
//
// })
