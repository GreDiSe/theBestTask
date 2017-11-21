var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(array, name) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = array[i][name];
    }
    return result;
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']