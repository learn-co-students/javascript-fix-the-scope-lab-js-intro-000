var animal = 'dog'

function myAnimal(n) {
  n = animal;
    return animal;
}

function yourAnimal(n) {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

function add2(n) {
  const two = 2
  return n + two
}

/*
  This below can hurt your brain.
  This is basically a function returning a function.
  Why is it confusing?
  Well think of Inception, and having a dream within a dream?
  Sort of hard to wrap your mind around that right?!
  This takes time to understand but the more you see it
  the concept will eventually click over time.
*/

var funkyFunction = function()
{
  return function()
    {
    return "FUNKY!"
    }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.

var theFunk = funkyFunction()();

/*
The above is basically the same thing as saying:

var theFunk = funkyFunction() {
  return theFunk()
}

*/
