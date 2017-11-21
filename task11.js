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

function outListOfBigCity(num) {
    let result = '';
    info.sort(sortForPopulation);
    for(let i = 0; i < num; i++){
        result += info[i].city + ' ';
    }
    return result;
}
function sortForPopulation(a, b) {return a.population <= b.population;}
console.log(outListOfBigCity(5));