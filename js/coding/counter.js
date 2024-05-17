// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1
// more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

var createCounter = function(n){
  let res = n;
  return function(){
    return res++;
  }
}

var counter = createCounter(0);
counter(); //0
counter(); //1
counter(); //2

var createCounter1 = function(n){
  return function () {
    return n++
  }
}

var createCounter2 = function(n){
  return () => n++
}



