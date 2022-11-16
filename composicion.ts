import Planta from './clases';
import Arbusto from './herencia';
import { limonero } from './clases';
import { libustro } from './herencia';
import Jardinero from './interface';
import NombrePlanta from './abstract';


export default class Vivero {
    private nombre: string;
    private sucursalNro: number;
    private planta: Planta;
    private arbusto: Arbusto;
    private jardinero:Jardinero;
    private NombrePlanta:NombrePlanta;

    public constructor(nombre: string, sucursalNro: number, planta: Planta, arbusto:Arbusto) {
        this.nombre = nombre;
        this.sucursalNro = sucursalNro;
        this.planta = planta;
        
    }
}


let vivero1 : Vivero = new Vivero ("Plantines",1,limonero,libustro);
console.log (vivero1);
