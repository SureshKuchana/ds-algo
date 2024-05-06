// Flipkart UI interview question
// Create a PolyFill for JSON.stringify
// Disclaimer:
// Please read what does JSON.stringify on MDN
// Try to cover all the datatypes

// What is PolyFill
// how to make our modern code work on older engines that don’t understand recent features yet?

// There are two tools for that:

// Transpilers. (https://javascript.info/polyfills#transpilers)
// Polyfills.   (https://javascript.info/polyfills#polyfills)

// A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

// E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100.

// A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100.

// before running the transpiler
// height = height ?? 100;

// after running the transpiler
// height = (height !== undefined && height !== null) ? height : 100;

// New language features may include not only syntax constructs and operators, but also built-in functions.

// For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

// In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

// As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

// A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

// For this particular case, the polyfill for Math.trunc is a script that implements it, like this:

// creating PolyFill, if no trunc function is there
// if (!Math.trunc) {
//   // if no such function
//   // implement it
//   Math.trunc = function (number) {
//     // Math.ceil and Math.floor exist even in ancient JavaScript engines
//     // they are covered later in the tutorial
//     return number < 0 ? Math.ceil(number) : Math.floor(number);
//   };
// }

function stringify(data) {
  if (data === undefined) return undefined;
  if (data === null) return "null";
  if (data.toString() === "NaN") return "null";
  if (data === Infinity) return "null";
  if (data.constructor === String) return '"' + data.replace(/"/g, '\\"') + '"';
  if (data.constructor === Number) return String(data);
  if (data.constructor === Boolean) return data ? "true" : "false";
  if (data.constructor === Array)
    return (
      "[" +
      data
        .reduce((acc, v) => {
          if (v === undefined || v === NaN || v === Infinity)
            return [...acc, "null"];
          else return [...acc, stringify(v)];
        }, [])
        .join(",") +
      "]"
    );

  if (data.constructor === Object)
    return (
      "{" +
      Object.keys(data)
        .reduce((acc, k) => {
          if (data[k] === undefined) return acc;
          else return [...acc, stringify(k) + ":" + stringify(data[k])];
        }, [])
        .join(",") +
      "}"
    );

  return "{}";
}

// or

// not tested
function stringify(data) {
  if (typeof data === "number") {
    return `${data}`;
  }
  if (typeof data === "boolean") {
    return `${data}`;
  }
  if (typeof data === "string") {
    return `"${data}"`;
  }

  if (Array.isArray(data)) {
    const arr = data.map((el) => stringify(el));
    return `[${arr.join(",")}]`;
  }
  if (typeof data === "object") {
    const result = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined || value === Infinity) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);
    return `{${result.join(",")}}`;
  }
}
