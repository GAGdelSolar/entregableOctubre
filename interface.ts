
// cree esta interface con la idea de que pueda "regar" la planta, quise componerlo en vivero
//pero no pude crear el objeto Jardinero, me daba error. Cree la interface regar para luego implementarla en la clase jardinero y me dio error,
// lo inverti y tampoco pude generar el objeto.

export default  interface Jardinero {
    nombre: string;
    cantidadDeAgua: number;
    regar() ;
}

export default  class regar implements Jardinero{
    nombre = "Carlos"
    cantidadDeAgua: number = 1;
    regar(){
        console.log ('Esta planta ha sido regada');
}}

