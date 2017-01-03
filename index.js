var animal = 'dog'



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })
*/
function myAnimal() {
  return animal
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
describe('yourAnimal()', function() {
  it('returns your animal', function(){
    expect(window.yourAnimal()).toEqual('cat')
  })

  it('does not hard-code the answer', function() {
    expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
  })
})
*/
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
var animal = "cat";

  return animal
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

*/
function add2(n) {
  const two = 2

  return n + two

  // Feel free to move things around!
//  const two = 2
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })
*/
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  };

}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
describe('theFunk', function() {
   it('is "FUNKY!"', function() {
     expect(window.theFunk).toEqual('FUNKY!')
   })
 })
*/

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = (function() {     return (function() {
    return "FUNKY!" })() })()
//theFunk();
