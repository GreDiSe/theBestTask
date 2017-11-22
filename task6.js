function partialAny(func, ...args){
    let args = Array.from(arguments);
    args.splice(0, 1);
    return function () {
        let arrInside = Array.from(arguments);

        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = arrInside.shift();
            }
        }
        args = args.concat(arrInside);
        return func.apply(this, args);
    }
}
function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
let part = partialAny(test, 1, undefined, 3);
console.log(part(5)); // a=1,b=5,c=3