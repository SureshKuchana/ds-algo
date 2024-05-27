// Scope
// Scope is the current context of execution in which values and expressions are visible or
// can be referenced

// JS has following kind of scopes
// 1. Global Scope
// 2. Module Scope
// 3. Block Scope
// 4. Function Scope


/**
 * Global Scope
 */

// <script src="script.js"></script>
// script.js
// const a = 1
console.log(a)

// The way global scope works is essentially any time you define a a variable at the top level of a file
//  (outside any function/curly braces) it is considered global scope and can be accessed 
//  ANYWHERE in your entire application.

/**
 * Module Scope
 */

// Module scope is very similar to global scope, but with one minor difference. 
// Module scope variables are only available within the file you define them in. 
// This means they cannot be used in other files which is ideal when trying to mentally keep track 
// of everything. In order to enter module scope you need to use type="module" on your script tags. This does much more than just change the scope so if you are unfamiliar with ES modules you should check out my full ES module guide.

{/* <script src="script-1.js" type="module"></script>
<script src="script-2.js" type="module"></script> */}

// script-1.js

// const a = 1
// console.log(a)

// script-2.js

// console.log(a)
// Throws Uncaught Reference Error: a is not defined

/**
 * Block Scope
 */

// The other major scope I use all the time is block scope. 
// Block scope is one of the easier scopes to understand because it lines up with the curly brace {}. 
// Essentially, anytime you have code inside curly braces that is considered its own block scope. This means things like functions, if statements, for loops, etc. all create their own block scope.

function test() {
  const funcVar = "Func"

  if (true) {
    const ifVar = "If"
    console.log(funcVar, ifVar)
    // Prints: "Func", "If"
  }

  console.log(funVar, ifVar)
  // Throws Uncaught Reference Error: ifVar is not defined
}

/**
 * Function Scope
 */

// The final scope is function scope and this is something you hopefully never have to worry about 
// as it relates to the var keyword. Variables defined with the var keyword are scoped at the 
// function level instead of the block level which means they only care about the curly braces of a function.

function test() {
  var funcVar = "Func"

  if (true) {
    var ifVar = "If"
    console.log(funcVar, ifVar)
    // Prints: "Func", "If"
  }

  console.log(funVar, ifVar)
  // Prints: "Func", "If"
}

// Lexical scope

// lexical scope is fundamental concept in JS.
// Lexical scope means, child scope has access to variables defined in parent' scope i.e
// inner function's can access the global variables.

var a = 5;

function sum(){
  return a + 5;
}

console.log(sum()); // 10


// Closure
// Closure is a bundling of two or more functions, where inner function's have access to the properties & methods
// of the outer function's even after the execution of the external function is done.

// or
// combination lexical env and function in which it was defined. In other words's a closure is a function
// that has access to variables in its outer(enclosing) fn scope, even after the outer fn has returned

function example(){
  var name = "Suresh"
  function displayName(){
    console.log(name);
  }
  displayName();
}

example(); // Suresh