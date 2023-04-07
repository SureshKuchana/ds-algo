// input ==> [1,2,3]
// output ==> 6
// max pairwise product is 6 = 2 * 3

// input ==> [7, 5, 14, 2, 8, 8, 10, 1, 2, 3]
// output ==> 140
// max pairwise product is 140 = 14 * 10

function maxPairwiseProduct(array){
	let maxProduct = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if((array[i] * array[j]) > maxProduct) {
				maxProduct = (array[i] * array[j]);				
			}
		}
	}
	return maxProduct;
}

console.log(" maxPairwiseProduct is 6 ", maxPairwiseProduct([1, 2, 3]));
console.log(" maxPairwiseProduct is 140 ", maxPairwiseProduct([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]));