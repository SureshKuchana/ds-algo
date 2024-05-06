/**
 * Implement the promise.all() polyfill
 * 
 * The promise.all() accepts an array of promsises & returns a promise that resolves when all of the promises
 * in the array are fulfilled or when the iterable contains no promise. It rejects with the reason of the first
 * promise that rejects.
 * 
 * we can break down the problem in sub-problem
 * 
 * 1) It will return a promise
 * 2) The promise will resolve with the result of all the passed promises & rejects with the error message of the 1st failed promise
 * 3) The results are returned in the same order as the promises are in the given array
 */

function myPromiseAllPolyfill(promiseList) {
  // store results
  const results = [];

  // track the promises that have completed
  let promisesCount = 0;

  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      // check if promise have resolved
      promise.then((val) => {
        // store the result of promise
        results[index] = val;
        // increment the count
        promisesCount += 1;

        // check if all promises completed, resolve & return the result
        if(promisesCount === promiseList){
          resolve(results);
        }
      }).catch(error => {
        reject(error);
      })
    });
  })
}

// Test case 1
function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(time);
    }, time);
  });
}

const promises = [task(1000), task(2000), task(3000)]

myPromiseAllPolyfill(promises)
  .then(results => {
    console.log(" results ", results);
  })
  .catch((err) => console.error(err));


