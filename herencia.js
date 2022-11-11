"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.libustro = void 0;
var clases_1 = require("./clases");
var Arbusto = /** @class */ (function (_super) {
    __extends(Arbusto, _super);
    function Arbusto(esDeSombra, nombre, tipo, estacionDeReproduccion) {
        return _super.call(this, nombre, tipo, estacionDeReproduccion) || this;
    }
    return Arbusto;
}(clases_1["default"]));
exports["default"] = Arbusto;
exports.libustro = new Arbusto(false, 'libustro', 'arbusto', 'verano');
console.log(exports.libustro);
