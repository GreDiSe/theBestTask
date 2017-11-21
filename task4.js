function fmap(func1, func2) {

        return function(a, b){
            return func1(func2(a, b))}
}

let gen = sequence(1, 1);
let squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

var squareAdd = fmap(square, add);

console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2


function sequence(start = 0, step = 1){
    start -= step;
    return function () {
        return start += step;
    };
}
function square(x) { return x * x; }

function add(a, b) {
    return a + b;
}