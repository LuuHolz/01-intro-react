
const activo = true;
let mensaje = '';

if( activo ){
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

// TERNARIO
const mensaje1 = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje2 = ( activo ) ? 'Activo' : null;

// si solo quiere que se cumpla una condicion y caso contrario no hacer nada:
const mensaje3 =  activo  && 'Activo';


console.log( mensaje );