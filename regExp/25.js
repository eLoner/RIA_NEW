"use strict";

var addresses = require('./addresses');
var result = [];

var addressCheck = /^\s*(?:ул|пр-т|вул|пл|пер)?[.\s]*((?:\d*[-])?[А-Яа-яЁёa-zA-Z0-9.\s]+)(?:[,\s]*(?:дом)?[.\s]*)?(\d+[А-Яа-я-a-zA-Z0-9-]*)?(?:[,\s]*(?:кв)?[.\s]*)?\/?(\d+)?\s*$/;

addresses.map(function (item) {
    var arrayElement = {};
    var inspection = addressCheck.exec(item);
    if (inspection) {
        arrayElement.street = inspection[1];
        arrayElement.home = inspection[2];
        arrayElement.flat = inspection[3];
    }
    result.push(arrayElement);
});
console.log(result);