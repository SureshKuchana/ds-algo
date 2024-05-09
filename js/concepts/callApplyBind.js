// call
// call invokes the function with this value & arguments provides one by one
// or
// call is a function that you use to change the value of this inside a function and execute it with the arguments provided.

var emp1 = { firstName: "Suresh" , lastName : "Koochana" }
var emp2 = { firstName: "MS" , lastName : "Dhoni" }

function invite(greet1, greet2) {
  console.log(greet1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greet2);
}

invite.call(emp1, 'Hello', 'How are you?'); // Hello Suresh Koochana, How are you?
invite.call(emp2, 'Hello', 'How are you?'); // Hello MS Dhoni, How are you?

// Apply
// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
// or
// The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed

invite.apply(emp1, ['Hello', 'How are you?']); // Hello Suresh Koochana, How are you?
invite.apply(emp2, ['Hello', 'How are you?']); // Hello MS Dhoni, How are you?

// Bind
// bind: returns a new function, allowing you to pass any number of arguments
// or
// The bind function creates a copy of a function with a new value to the this present inside the calling function

var func1 = invite.bind(emp1, 'Hello', 'How are you?'); 
var func2 = invite.bind(emp2, 'Hello', 'How are you?'); 
func1() // Hello Suresh Koochana, How are you?
func2() // Hello MS Dhoni, How are you?

// or
var inviteEmployee1 = invite.bind(emp1);
var inviteEmployee2 = invite.bind(emp2);
inviteEmployee1('Hello', 'How are you?'); // Hello Suresh Koochana, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello MS Dhoni, How are you?
