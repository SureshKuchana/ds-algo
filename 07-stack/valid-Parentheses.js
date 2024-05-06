// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValidParentheses1(str){
	let hashmap = [];

	for (let i = 0; i < str.length; i++) {
		if(str[i] === '['){
			hashmap.push(']')
		}
		else if(str[i] === '{'){
			hashmap.push('}')
		}
		else if(str[i] === '('){
			hashmap.push(')')
		}
	}
	return hashmap.length === (str.length / 2);
}

function isValidParentheses(str){
	const leftSymbols = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' || str[i] === '{' || str[i] === '['){
			leftSymbols.push(str[i]);
		}

		else if(str[i] === ')' && leftSymbols.length !== 0
							&& leftSymbols[leftSymbols.length - 1] === "(") {
			leftSymbols.pop()
		}
		else if(str[i] === ']' && leftSymbols.length !== 0
							&& leftSymbols[leftSymbols.length - 1] === "[") {
			leftSymbols.pop()
		}
		else if(str[i] === '}' && leftSymbols.length !== 0
							&& leftSymbols[leftSymbols.length - 1] === "{") {
			leftSymbols.pop()
		}else {
			return false;
		}
	}
	return leftSymbols.length === 0;
}

console.log("should return true :=> ", isValidParentheses("()"))
console.log("should return true :=>", isValidParentheses("(){}"))
console.log("should return true :=>", isValidParentheses("()[]{}"))
console.log("should return false :=>", isValidParentheses("(]"))
console.log("should return false :=>", isValidParentheses("([)]"))
console.log("should return true :=>", isValidParentheses("{[]}"))