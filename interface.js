"use strict";
// cree esta interface con la idea de que pueda "regar" la planta, quise componerlo en vivero
//pero no pude crear el objeto Jardinero, me daba error. Cree la interface regar para luego implementarla en la clase jardinero y me dio error,
// lo inverti y tampoco pude generar el objeto.
exports.__esModule = true;
var regar = /** @class */ (function () {
    function regar() {
        this.nombre = "Carlos";
        this.cantidadDeAgua = 1;
    }
    regar.prototype.regar = function () {
        console.log('Esta planta ha sido regada');
    };
    return regar;
}());
exports["default"] = regar;
