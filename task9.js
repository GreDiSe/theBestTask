var input = [1, 2, 3, 4, 5, 6];

function filter(array, condition) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(isEven(array[i])) result[result.length] = array[i];
    }
    return result;
}


function isEven(x) { return x % 2 === 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]