// Implement Array.forEach
// The forEach() method executes a provided function once for each array element.

// Implement the Array.forEach method

// Thought process Pseudocode
// A function which takes a function as an argument
// The function argument must be passed the array index, the item and the context
// A check should me made to see if the item exists in the array

Array.prototype.newForEach = function(callback){
  for (let index = 0; index < this.length; index++) {
    if(this.indexOf(this[index]) > -1){
      callback(this[index], index, this)
    }
  }
}
 

// example
const words = ["adam", "ate", "an", "apple"]
const upperCaseList = []
words.newForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase())
})
console.log(upperCaseList)