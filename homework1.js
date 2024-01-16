//1. Invert object
/*function isKeyInObj(k, o) {
    for (let key in o) {
        if (key === k) {
            return true;
        }
    }

    return false;
}

function invertObj(o) {
    let newObj = {};
    for (let key in o) {
        if ( isKeyInObj(o[key], newObj) ) {
            if( typeof(newObj[o[key]]) !== 'object' ) {
                newObj[o[key]] = [newObj[o[key]]];
            }
            newObj[o[key]].push(key);
        } else {
            newObj[o[key]] = key;
        }
    }

    return newObj;
}

const o1 = {
    a: '1',
    b: '2',
    c: '2',
    d: '2'
}

console.log( invertObj(o1) );*/

//2. Compare objects
/*function shallowCompare(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }

    return true;
}

console.log( shallowCompare({a: null}, {a: null}) );*/

//3. Palindrome
/*function isPalindrome(s) {
    if (s === '' || s.length == 1) {
        return true;
    } else {
        let l = s.length;
        for (let i = 0; i < l / 2; i++) {
            if (s[i] !== s[(l - 1) - i]) {
                return false;
            }
        }
        return true;
    }
}

console.log( isPalindrome('abcddba'));*/

//4. Missing numbers
/*function findMinIndex(arr) {
    let minIndex = 0;
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}

function findMaxIndex(arr) {
    let maxIndex = 0;
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function countMissingNumbers(arr) {
    let min = findMinIndex(arr);
    let max = findMaxIndex(arr);
    let count = (arr[max] - arr[min] - 1) - arr.length + 2;
    return count;
}

console.log( countMissingNumbers([5, 3, -1, 10, 7, 8, 1]) );*/

//5. Check
function check(elem, arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

console.log( check('b', ['a', 'b', 'c', 'd']) );

