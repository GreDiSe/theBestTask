var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = shallowCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1
console.log(b.x); // 10
b.z.push(4);
console.log(a.z); // [1, 2, 3, 4]
console.log(b.z); // [1, 2, 3, 4]
var c = new Date(2014, 1, 1);
var d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear()); // 2015
console.log(d.getFullYear()); // 2015


function shallowCopy(value) {
    if(value.constructor.name !== 'Object' || !(value instanceof Object)) return value;

    let result = {};
    for(let prop in value) result[`${prop}`] = value[prop];
    return result;
}