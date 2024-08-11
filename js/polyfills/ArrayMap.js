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

// mapLimit

// How to implement custom map function with limit on number of operations? 
// | Paytm Frontend Interview Question | JavaScript Interview Questions | 
// Frontend Problem Solving

// In this question, you need to implement a custom mapLimit function that takes 4 arguments

// inputs: An array of inputs
// limit: The maximum number of operations at any given time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
// input: The input being processed
// callback: A function that will be called when the input is finished processing. It will be provided with one argument, the processed output.
// callback: A function that should be called with the array of outputs once all inputs have been processed.
// At any given point, your program can make max 2 calls i.e. at any given point your program can process 1, 2 or 2, 3 or so on user ids.

function getUserById(id, callback) {
// simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id)
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let index = 0;
  let responses = [];
  let completedTasks = 0

  // callback function
  function postCallbackFn(activeIndex, output){

    responses[activeIndex] = output;
    completedTasks += 1;

    if(completedTasks === inputs.length) {
      callback(responses);
      return
    };

    if(index < inputs.length){
      iterateeFn(inputs[index], postCallbackFn.bind(null, index))
      index++;
    }

  }

  // 0 => inputs[0] => fn(1, cb)
  // 1 => inputs[1] => fn(2, cb)
  // 2 => 2 < 2 => false => break loop
  while (index < limit) {
    iterateeFn(inputs[index], postCallbackFn.bind(null, index))
    index++;
  }
}

mapLimit([1,2,3,4,5], 2, getUserById, (allResults) => {
  console.log('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
})