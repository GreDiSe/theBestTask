var x = 1;
let ctx = { x: 2 };

function bind(func, content) {
    return func.bind(content);
}
function testThis(a) { return("x=" + this.x + ", a=" + a); }
console.log(testThis(100)); // x=1, a=100
let boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100