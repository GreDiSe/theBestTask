function showTheBiggestCity(form) {
    let value = form.text.value;
    if(checkError(+value)){
        alert(checkError(+value));
        removeChildren(document.getElementById("table"));
        return;
    }


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'info.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        let phones = JSON.parse(xhr.responseText);
        showList(phones, +value);
    };
    xhr.send();
}

function sortForPopulation(a, b) {return a.population <= b.population;}
function checkError(value) {
    if(isNaN(value) || value === 0){
        return("Введите число");
    }
    else  if(value > 10) {
        return("Слишком большее число");
    }
}
function showList(info, value) {
    info.sort(sortForPopulation);
    removeChildren(document.getElementById("table"));

    let table = document.createElement('table');
    table.style.border = '2px solid black';
    table.style.marginTop = '20px';
    document.getElementById("table").appendChild(table);


    for(let i = 0; i < value; i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for(let key in info[i]){
            let td = document.createElement('td');
            td.style.border = '2px solid black';
            td.style.padding = "20px";
            td.innerHTML = info[i][key];
            tr.appendChild(td);
        }
    }
}
function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}