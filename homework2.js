//1.
function charCodeAt(str, index) {
    const symbols = [
        ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
        '*', '+', ',', '-', '.', '/', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', ':', ';', '<', '=',
        '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[',
        '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z', '{', '|', '}', '~'
    ]
    const target = str[index];
    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] === target) {
            return (i + 32);
        }
    }
    return -1;
}

//console.log(charCodeAt('Hello world', 0));

//2.
function concat(arg1, arg2) {
    if ( !Array.isArray(arg2) ) {
        return '' + arg1 + arg2;
    } else {
        let result = '' + arg1;
        for (let i = 0; i < arg2.length; i++) {
            result += arg2[i];
        }
        return result;
    }
}

//console.log( concat(16, [25, 'xyz', true, null, NaN, 'abcd']) );

//3.
function endsWith(str, searchValue, pos=str.length) {
    for (let i = pos - 1; i > -1; i--) {
        let found = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (str[i - j] !== searchValue[searchValue.length - 1 - j]) {
                return false;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

//console.log( endsWith('Hello world') );

//4.
function lastIndexOf(str, searchValue, start=str.length) {
    for (let i = start; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (str[i - j] !== searchValue[searchValue.length - 1 - j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i - searchValue.length + 1;
        }
    }
    return -1;
}

//console.log( lastIndexOf('Hello planet earth, you are a great planet.', 'planet', 20) );

//5.
function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

//console.log( repeat('Hello world!', 4) );

//6.
function replace(str, target, replaceValue) {
    for (let i = 0; i < str.length; i++) {
        let found = false;
        for(let j = 0; j < target.length; j++) {
            if (str[i + j] === target[j]) {
                found = true;
            } else {
                found = false;
            }
        }
        if (found) {
            str = str.slice(0, i) + replaceValue + str.slice(i + target.length);
            break;
        }
    }

    return str;
}

//7.
function slice(str, start, end=str.length) {
    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

//console.log( slice('Hello world!', 0, 5) );

//8.
function split(str, separator, limit=Infinity) {
    let result = [];
    let start = 0;
    for (let i = 0; result.length < limit && i < str.length; i++) {
        if (str[i] === separator) {
            result.push( slice(str, start, i) );
            start = i + 1;
        }
        if (i === str.length - 1) {
            result.push( slice(str, start) );
        }
    }
    return result;
}

//console.log( split('How are you doing today?', ' ', 4) );


//9.
function startsWith(str, searchValue, pos=0) {
    for (let i = pos; i < str.length; i++) {
        let found = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (str[i + j] !== searchValue[j]) {
                return false;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

//console.log( startsWith('Hello world!', 'Hello') );

//10.
function substring(str, start, end=str.length) {
    if (start < 0) {start = 0;}
    if (end < 0) {end = 0;}
    if (start > end) {
        let t = start;
        start = end;
        end = t;
    }
    let substr = '';
    for (let i = start; i < end; i++) {
        substr += str[i];
    }
    return substr;
}

//console.log( substring('Hello world!', 4, 1) );

