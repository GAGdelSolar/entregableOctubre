"use strict";
exports.__esModule = true;
var clases_1 = require("./clases");
var herencia_1 = require("./herencia");
var Vivero = /** @class */ (function () {
    function Vivero(nombre, sucursalNro, planta, arbusto) {
        this.nombre = nombre;
        this.sucursalNro = sucursalNro;
        this.planta = planta;
    }
    return Vivero;
}());
exports["default"] = Vivero;
var vivero1 = new Vivero("Plantines", 1, clases_1.limonero, herencia_1.libustro);
console.log(vivero1);
