"use strict";
exports.__esModule = true;
exports.limonero = void 0;
var Planta = /** @class */ (function () {
    function Planta(nombre, tipo, estacionDeReproduccion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estacionDeReproduccion = estacionDeReproduccion;
    }
    Planta.prototype.getNombre = function () {
        return this.nombre;
    };
    Planta.prototype.crecer = function (alimento) {
        return console.log('Para crecer esta planta necesita ' + alimento);
    };
    ;
    Planta.prototype.getEstacionDeReproduccion = function () {
        return console.log('Esta planta se reproduce en ' + this.estacionDeReproduccion);
    };
    ;
    return Planta;
}());
exports["default"] = Planta;
exports.limonero = new Planta('limonero', 'citrico', 'cuatro estaciones');
console.log(exports.limonero);
