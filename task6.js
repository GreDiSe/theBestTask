function partialAny(func, ...args){
    return func.bind(null, ...args)
}

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
let part = partialAny(test, 1, undefined, 3);
console.log(part(5)); // a=1,b=5,c=3