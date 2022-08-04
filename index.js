function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function increment(n){
    n++
    return n;
}

function decrement(n){
    n--
    return n;
}

function makeInt(n){
    return parseInt(n);
}

function makeInt(n){
    return parseInt(n, 10);
}

function preserveDecimal(n){
    return parseFloat(n);
}


add(3, 2)
subtract(4, 2)
multiply(3, 2)
divide(3, 2)
increment(6)
decrement(7)
console.log(makeInt('Hi'))
console.log(preserveDecimal("3.222222"))