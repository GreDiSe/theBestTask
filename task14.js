function typeOfThis(something) {
    let str = Object.prototype.toString.call(something).slice(8, -1).toLowerCase();
    return str === 'arguments' ? 'array-like' : str;
}

var arguments;
foo(1,4,6,7,8,9,5);

console.log(typeOfThis(undefined));
console.log(typeOfThis(true));
console.log(typeOfThis(null));
console.log(typeOfThis(2));
console.log(typeOfThis("something"));
console.log(typeOfThis(foo));
console.log(typeOfThis([1,4]));
console.log(typeOfThis(arguments));
console.log(typeOfThis({a: 45}));




function foo() {
    arguments = arguments;
}

