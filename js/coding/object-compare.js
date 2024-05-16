// compare two nested object's
// return true if both are same, else return false

let a = {
  name:'abc',
  age: 20,
  areaOfInterest:[
   { inSports:'badminton', outSports:'football' },
   { inSports:'chess', outSports:'tennis' }
  ]
}
    
let b = {
  age:'abc',
  name: 20,
  areaOfInterest:[
   { inSports:'chess', outSports:'tennis' },
   { inSports:'badminton', outSports:'football' }
  ]
}

let c = {
  age:'abc',
  name: 20,
  areaOfInterest:[
   { inSports:'chess', outSports:'tennis' },
   { inSports:'badminton', outSports:'football' }
  ]
}


function objectCompare(obj1, obj2){
	for (const [key, value] of Object.entries(obj1)) {
		if(typeof value === 'object'){
			return objectCompare(value, obj2[key])
		}else{
			if(obj1[key] !== obj2[key]) return false
		}
	}
	return true;
}

console.log(objectCompare(a, b));
console.log(objectCompare(b, c));