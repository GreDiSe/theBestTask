var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = clone(a); // b — это отдельный объект
var c = new Date(2014, 1, 1);
var d = clone(c);
b.x = 10;
b.z.push(4);
d.setFullYear(2015);

console.log(a.x); // 1
console.log(b.x); // 10
console.log(a.z); // [1, 2, 3]
console.log(b.z); // [1, 2, 3, 4]
console.log(c.getFullYear()); // 2014
console.log(d.getFullYear()); // 2014

function clone(objectToBeCloned){
    if (!(objectToBeCloned instanceof Object)) {
        return objectToBeCloned;
    }

    var objectClone;

    var Constructor = objectToBeCloned.constructor;
    switch (Constructor) {
        case RegExp:
            objectClone = new Constructor(objectToBeCloned);
            break;
        case Date:
            objectClone = new Constructor(objectToBeCloned.getTime());
            break;
        default:
            objectClone = new Constructor();
    }

    for (var prop in objectToBeCloned) {
        objectClone[prop] = clone(objectToBeCloned[prop]);
    }

    return objectClone;
}