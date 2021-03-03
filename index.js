var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal= 'cat'
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  return animal

}

/*
describe('add2(n)', function() {
  it('adds two to n', function() {
    const n = Math.floor(Math.random() * 1000)
    expect(window.add2(n)).toEqual(n + 2)
  })
})
*/



function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}


/*
describe('funkyFunction()', function() {
  it('returns a function', function() {
    expect(typeof window.funkyFunction()).toEqual('function')
  })
})

describe("the variable 'theFunk'", function() {
  it('is equal to "FUNKY!"', function() {
    expect(window.theFunk).toEqual('FUNKY!')
  })
})

})
*/

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()
theFunk = theFunk()
