import Planta from "./clases";

export default class Arbusto extends Planta {
    

    public esDeSombra : boolean;

    public constructor(esDeSombra :boolean,nombre: string, tipo: string, estacionDeReproduccion: string) {
        super (nombre, tipo, estacionDeReproduccion)
                        
     }

} 

export let libustro : Arbusto = new Arbusto (false,'libustro', 'arbusto', 'verano');

console.log (libustro);