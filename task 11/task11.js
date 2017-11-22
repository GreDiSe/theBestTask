function showTheBiggestCity(form) {
    let value = form.text.value;
    if(checkError(+value)){
        alert(checkError(+value));
        return;
    }
    showList(+value)
}
const info = [
    {city: 'Манила', country: 'Филиппины', population: 24245},
    {city: 'Токио', country: 'Япония', population: 37900},
    {city: 'Сеул', country: 'Республика Корея', population: 24105},
    {city: 'Дели', country: 'Индия', population: 26495},
    {city: 'Париж', country: 'Франция', population: 10950},
    {city: 'Лондон', country: 'Великобритания', population: 10470},
    {city: 'Карачи', country: 'Пакистан', population: 23545},
    {city: 'Шанхай', country: 'КНР', population: 23390},
    {city: 'Гонконг', country: 'КНР', population: 7330},
    {city: 'Джакарта', country: 'Индонезия', population: 31760}];


function sortForPopulation(a, b) {return a.population <= b.population;}
function checkError(value) {
    if(isNaN(value) || value === 0){
        return("Введите число");
    }
    else  if(value > 10) {
        return("Слишком большее число");
    }
}
function showList(value) {
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