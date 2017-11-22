const TYPE_ELECTRICAL_DEVICE = [
    {name: 'Электростанции', minPower: 1, maxPower: 100},
    {name: 'Солнечные панели', minPower: 1, maxPower: 5, nightPower: 0},
    {name: 'Жилой дом', nightConsume: 1, dayConsume: 4, minCountFlat: 1, maxCountFlat: 400},
    {name: 'Линия электропередач', power: 100}
];

function ElectricalNetwork(args) {

}
ElectricalNetwork.POWER_STATION = 0;
ElectricalNetwork.SOLAR_PANEL = 1;
ElectricalNetwork.HOUSE = 2;
ElectricalNetwork.POWER_LINES = 3;

