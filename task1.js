function sequence(start = 0, step = 1){
    start -= step;
    return function () {
        return start += step;
    };
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8