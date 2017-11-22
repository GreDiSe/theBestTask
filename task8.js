let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(array, name) {
    let arr = [];
    for (let obj of array){
        arr.push(obj[name]);
    }
    return arr;
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']