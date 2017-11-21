function take(gen, x) {
    let result = [];
    for(let i = 0; i < x; i++){
        result[result.length] = gen();
    }
    return result;
}

let gen2 = sequence(1, 5);
console.log(take(gen2, 5));



function sequence(start = 0, step = 1){
    start -= step;
    return function () {
        return start += step;
    };
}
