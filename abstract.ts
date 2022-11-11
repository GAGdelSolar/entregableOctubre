
export default abstract class NombrePlanta {
    abstract getNombre ():string;
    mostrarNombre (){
        console.log ('El nombre de esta planta es ' + this.getNombre);
    }
}

