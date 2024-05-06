// how many digits in the given number using the bit manipulation

// we can use string to achieve result but it is not recommended
// convert int ==> string i.e i = 123; i.toString().length

// we use division / 10 to get the count of the digits

function countDigits(n){
    let count = 0;
    while( n > 0){
        count++;
        n = Math.floor(n / 10);
    }
    return count;
} 

// console.log(" countDigits 123 ==> 3 digits", countDigits(123))
// console.log(" countDigits 12 ==> 2 digits", countDigits(12))
// console.log(" countDigits 1 ==> 1 digits", countDigits(1))

// Convert Decimal number to binary number using the bit manipulation
// we achieve this using the << or >> shift operators
function decimalToBinary(n){
    let count = 0;
    while( n > 0){
        ++count
        n = Math.floor(n >> 1);
    }
    return count;
}

// console.log(" decimalToBinary 125 ==> 7  digits", decimalToBinary(125))
// console.log(" decimalToBinary 129 ==> 8 digits", decimalToBinary(129))

function setBitCount(n){
    let count = 0;
    while( n > 0){
        if(n % 2 !== 0){
            count++;
        }
        n = Math.floor(n / 2);
    }
    return count;
}

function setBitCount1(n){
    let count = 0;
    while( n > 0){
        if((n >> 1) !== 1){
            count++;
        }
        n = n >> 1
    }
    return count;
}

function setBitCount2(n){
    let count = 0;
    while( n > 0 ){
        count += (n & 1);
        n = n >> 1;
    }
    return count;
}

console.log(" setBitCount 5 ==> 2  digits", setBitCount(5))
console.log(" setBitCount 125 ==> 5 digits", setBitCount(125))
console.log(" setBitCount1 5 ==> 2  digits", setBitCount1(5))
console.log(" setBitCount1 125 ==> 5 digits", setBitCount1(125))
console.log(" setBitCount2 5 ==> 2  digits", setBitCount2(5))
console.log(" setBitCount2 125 ==> 5 digits", setBitCount2(125))