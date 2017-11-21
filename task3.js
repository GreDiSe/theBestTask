function map(func, array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[result.length] = func(array[i]);
    }
    return result;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []




function square(x) { return x * x; } // возведение в квадрат
