
const alumnos = ['Luciana','Nicolas','Salvador'];

//Desestructuro
        // El espacio vacio es porque no quiero que me devuelva esas posiciones, si alumno3[2]
const [ , , alumno3 ] = alumnos;
console.log( alumno3 );



const retornaArreglo = () => ['ABC', 123];

// Podemos extraerlos en sus constantes independientes y no un array completo
const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );


//TAREA
//1. El primer valor del arr se llamara nombre
//2. se llamara setNombre

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola') } ]
}

const [ nombre, setNombre ] = useState( 'Lu' );

console.log( nombre );
setNombre();
