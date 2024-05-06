// Implement Array.map
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Implement the Array.filter method

// Thought process Pseudocode
// A function which takes a function as an argument and an optional parameter for execution context
// The function argument must be passed the array index, the item and the context
// The result of the callback invokation is tested, if true the array element is pushed to a new array item

Array.prototype.newFilter = function (callback, context) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if(callback.call(context, this[index], index, this)){
      result.push(this[index]);
    }
    // or
    // if (this.indexOf(this[index]) > -1) {
    //   result.push(callback(this[index], index, this));
    // }
  }
  return result;
}

// example
const numbers = [1, 2, 3, 4]
const even = numbers.newFilter(item => item % 2 === 0)
console.log(even)