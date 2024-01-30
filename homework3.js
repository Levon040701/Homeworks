// 1.
function isAllUnique(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

// console.log( isAllUnique([undefined, null, NaN, {a: '123'}]) );

//2.
function isPrime(n) {
    if (n < 2 || n != Math.floor(n)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function sumAllPrimes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( isPrime(arr[i]) ) {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log( isAllPrime([11, 23, 97, 5, 601]) );

// 3.
function maxProduct(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let product = arr[i] * arr[i + 1];
        if (product > max) {
            max = product;
        }
    }
    return max;
}

// console.log( maxProduct([55, -1, 100, -24, 10, -89]) );

// 4.
function binarySearch(arr, target, start=0, end=arr.length - 1) {
    let middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) {
        return middle;
    }
    if (start === end) {
        return -1;
    }
    if (target < arr[middle]) {
        return binarySearch(arr, target, start, middle);
    }
    if (target > arr[middle]) {
        return binarySearch(arr, target, middle + 1, end);
    }
}

// console.log( binarySearch([1, 10, 100, 1000], 1) );

