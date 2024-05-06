const upperCase = (str) => str.toUpperCase();

const reverse = (str) => str.split("").reverse().join("");

const append = (str) => "Hello " + str;

let arr = [upperCase, reverse, append]

let initialValue = "suresh"

const finalValue = arr.reduce((prev, curr) => curr(prev), initialValue)

console.log(finalValue);
// Hello HSERUS

// run a promise in a sequence

const asyncTasker = function(time) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time)
  });
}

const promises = [
  asyncTasker(3),
  asyncTasker(1),
  asyncTasker(7),
  asyncTasker(2),
  asyncTasker(5),
]

const asyncExecuter = function(promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => curr.then(val => {console.log(val)}))
  }, Promise.resolve())
}

console.log(asyncExecuter(promises));