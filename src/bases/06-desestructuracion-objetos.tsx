// DESESTRUCTURACION 
// ASIGNACION DESESTRUCTURANTE

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Gema'
};

// Las llaves significan: Extrae solamente 'nombre' del objeto 'persona'
const { nombre: string } = persona;

console.log( nombre );

// Estraer propiedades que nos interesan ({ x }). Se pueden asignar valores por defecto ej. rango
const useContext = ({ nombre, edad, clave, rango = 'Capitan'} : {nombre: string; edad: number; clave: string; rango: string}) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 13.3523,
            lng: -12.2453
        }
    }
}

                         // Extraemos objetos anidados y los asignamos a constantes
const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

// Otra opcion para extraer el dato anidado
const { latlng } = useContext( persona );
const { lat, lng } = latlng;


console.log( nombreClave, anios );
console.log( latlng );
