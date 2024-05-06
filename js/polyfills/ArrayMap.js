// Implement Array.map
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// Thought process Pseudocode
// 1. A function which takes a function as an argument
// 2. The function argument must be passed item, array index and the context

Array.prototype.newMap = function(callback) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
     if (this.indexOf(this[index]) > -1) {
        result[index] = callback(this[index], index, this);
     }    
  }
  return result;
}

// example
const numbers = [1, 2, 3, 4]
numbers[10] = 34;
const double = numbers.newMap((item, index) => {
  return item * 2
})
console.log(double)