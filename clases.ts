

export default class Planta {
    private nombre: string;
    private tipo: string;
    private estacionDeReproduccion:string ;
    
​
    public constructor(nombre: string, tipo: string, estacionDeReproduccion: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estacionDeReproduccion = estacionDeReproduccion;
    }
​
    public getNombre() {
        return this.nombre;
    }
    public crecer(alimento:string):void{
        return  console.log ('Para crecer esta planta necesita ' + alimento)
    };
    public getEstacionDeReproduccion(){
        return  console.log ('Esta planta se reproduce en ' + this.estacionDeReproduccion)
    }; 
​
   
}

export let limonero : Planta = new Planta('limonero', 'citrico', 'cuatro estaciones');

console.log (limonero);