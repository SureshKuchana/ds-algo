// Write a flatten function that takes in a value and returns a flattened version
// of that value

// Nested array should have their values bought up to the top level array eg
// [1, 2, [3, 4, [5, 6]]] ==> [1,2,3,4,5,6]

// {a : 1, b : {c: 2, d: 3, e: {f: 4}}} ==> {a: 1, c: 2, d: 3, f: 4}

// {a: [1, 2, [3, 4]]} ==> {a: [1, 2, 3, 4]}

// [{a: 1, b: {c: 2, d: 3}}] ==> [{a: 1, c: 2, d: 3}]

function flatten(value){
  if(typeof value !== 'object' || value === null) return value
  if(Array.isArray(value)){
    return flattenArray(value)
  }

  return flattenObject(value)
}

function flattenArray(arr){
  let res = [];
  for (const ele of arr) {
    const eleIsObject = !Array.isArray(ele) && typeof ele === "object" && ele !== null;
    if(eleIsObject){
      return flatten(ele);
    } else {
      if(ele instanceof Array){
        res.push(...flattenArray(ele))
      } else {
        res.push(ele)
      }
    }
  }
  return res;
}

function flattenObject(obj){
  const flattenObj = {};
  for (const [key, value] of Object.entries(obj)) {
    const valueIsObject = !Array.isArray(value) && typeof value === "object" && value !== null;
    if(valueIsObject){
      Object.assign(flattenObj, flatten(value))
    } else {
      flattenObj[key] = value
    }
	}

  return flattenObj;
}