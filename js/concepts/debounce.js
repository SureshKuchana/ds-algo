// Debounce (For improving the performance of events in javascript plugins)

// Debouncing and throttling are both used to enhance the website performance 
// by limiting the number of times the events are triggered.

// Debouncing and throttling are not provided by JavaScript.
// They’re just concepts that can be implemented using the setTimeout web API.

/**
 * Debounce is a technique used to control the how many times function to 
 * be executed over time.
 *  (or)
 * Debounce function forces a function to wait a certain amount 
 * of time before running again.
 * 
 * (or)
 * With debouncing, you wait a specified amount of time before running a function.
 * The last attempt to run the function is the one that runs,
 * and any previous attempts within the time period are ignored.
 */

let counter = 0;
const fetchData = () => {
  // fetching the api calls
  console.log(`Fetching data via api.. ${counter++}`);
}

const debounce = function(fn, d){
  let timer;
  return function(...args){
    let context = this;    
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, d)
  }
}

const debounceFunc = debounce(fetchData, 3000)
debounceFunc()

// normal fn

function debounceFunc(fn, d){
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
      fn();
  }, d)
} 
debounceFunc(fetchData, 3000)