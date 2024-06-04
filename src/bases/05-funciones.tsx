// ----- FUNCIONES -----

const saludar1 = (nombre: string) => {
    return `Hola, ${ nombre }`;
}

// Si la funcion solo me devuelve un RETURN puedo hacerla en una sola linea:
const saludar2 = ( nombre: string ) => `Hola, ${ nombre }`;
const saludar3 = () => `Hola`;

// Si tengo solo un RETURN de un objeto y lo quiero hacer mas breve, no coloco el return y en vez de {} coloco () para que no confunda con las del objeto.
const getUser = () => ({
        id: 'ABC',
        username: 'Lu_1',
    }
)

console.log( saludar1('Lu') );
console.log( saludar2('Lu') );
console.log( saludar3() );
console.log( getUser() );

// TAREA
//1. Transformar a funci'on de flecha
//2. Retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo = (nombre: string)=> ({
    id: '1234',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

