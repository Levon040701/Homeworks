const a = [7, 234, 65, -98, 3.65, 12345, -466775, 101, -33, 0, 0.543234,
    2, 11111, 1000, 256, 128, 13, 2024, -464.3452, 1];

//1.
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if ( callback(arr[i]) ) {
            return arr[i];
        }
    }
}

// console.log( find(a, isPrime) );

//2.
function filter(arr, callback) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if ( callback(arr[i]) ) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

// console.log( filter(a, n => n < 0) );

//3.
function map(arr, callback) {
    const mapping = [];
    for (let i = 0; i < arr.length; i++) {
        mapping[i] = callback(arr[i]);
    }
    return mapping;
}

// console.log( map(a, n => Math.floor( absoluteValueOf(n) )) );

//4.
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if ( !callback(arr[i]) ) {
            return false;
        }
    }
    return true;
}

// console.log( every(a, isIntager) );

//5.
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if ( callback(arr[i]) ) {
            return true;
        }
    }
    return false;
}

// console.log( some(a, isSquare) );

//6.
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if ( callback(arr[i]) ) {
            return i;
        }
    }
    return -1;
}

// console.log( findIndex(a, n => !(n % 11)) );

//7.
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
    return arr;
}

// let sum = 0;
// forEach(a, function (n) {
//     sum += n;
// });
// console.log(sum);



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

function absoluteValueOf(n) {
    if (n < 0) {
        n = -n;
    }
    return n;
}

function isIntager(n) {
    if ( n === Math.floor(n) ) {
        return true;
    }
    return false;
}

function isSquare(n) {
    if ( isIntager( Math.sqrt(n) ) ) {
        return true;
    }
    return false;
}

