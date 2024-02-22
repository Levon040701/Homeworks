// 1.
function reverseRec(n) {
    if (n < 10) {
        return n;
    }

    let firstDigit = n;
    let digitCount = 0;
    while (firstDigit >= 10) {
        firstDigit = Math.floor(firstDigit / 10);
        digitCount++;
    }
    return reverseRec((n - firstDigit * Math.pow(10, digitCount))) * 10 + firstDigit;
}

// console.log( reverseRec(2) );

// 2.
function secondOccurenceRec(n, arr, count=0, index=0) {
    if (count === 2) {
        return index - 1;
    }

    if (arr[index] === n) {
        ++count;
    }
    return secondOccurenceRec(n, arr, count, ++index);
}

// console.log( secondOccurenceRec(8, [8, 8, 4, 0, 8, 0, 0, 0, 4]) );

// 3.
function substrCountRec(sub, str, count=0) {
    if (!str.includes(sub)) {
        return count;
    }

    let newStr = str.slice(str.indexOf(sub) + sub.length);
    return substrCountRec(sub, newStr, ++count);
}

// console.log( substrCountRec('ar', 'Are var far shared?') );

// 4.
function replacePiRec(str) {
    if(!str.toLowerCase().includes('pi')) {
        return str;
    }

    str = str.toLowerCase().replace('pi', '3.14');
    return replacePiRec(str);
}

// console.log( replacePiRec('Picturespicturespictures') );

// 5.
function concatInArray(arr1, arr2) {
    let result = arr1;
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    return result;
}

function flattenRec(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    }

    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        flat = concatInArray(flat, flattenRec(arr[i]));
        // console.log(arr[i]);
    }
    return flat;
}

// console.log( flattenRec([1, [3, 4, [1, 2]], 10]) );

// 6.
function digitSumRec(n) {
    if (n < 10) {
        return n;
    }

    let sum = 0;
    while (n >= 1) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return digitSumRec(sum);
}

// console.log( digitSumRec(14) );

