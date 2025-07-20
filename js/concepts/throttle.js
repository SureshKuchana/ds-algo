// Throttle (For improving the performance of events in javascript plugins)

// Debouncing and throttling are both used to enhance the website performance 
// by limiting the number of times the events are triggered.

// Debouncing and throttling are not provided by JavaScript.
// They’re just concepts that can be implemented using the setTimeout web API.

/**
 * Throttling is also used to rate-limit the function call. 
 * Throttling will fire the function call only once in 1000ms(the limit which we have provided),
 * no matter how many times the user fires the function call.
 * 
 * (or)
 * 
 * With throttling, you run a function immediately, and wait a specified amount of time before
 * running it again. Any additional attempts to run it before that time period is over are ignored.
 */

let counter = 0;
const fetchData = () => {
  // fetching the api calls
  console.log(`Fetching data via api.. ${counter++}`);
}

const throttle = (fn, d) => {
  let flag = true;
  return function() {   
    if(flag){
      fn();
      flag = false
      setTimeout(() => {
        flag = true
      }, d)
    }
  }
}

const throttleFunc = throttle(fetchData, 3000)
throttleFunc()

// normal fn
function throttleFunc(fn, d){
  let flag = true;
  if(flag){
      fn();
      flag = false;
      setTimeout(() => {
          flag = true;
      }, d);
  }
}
throttleFunc(fetchData, 3000)