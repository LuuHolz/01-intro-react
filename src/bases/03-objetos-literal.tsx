// ------- OBJETOS LITERALES ---------

const persona = {
    nombre: 'Tony',
    apellido: 'Cena',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 34444,
        lat: 12.2556,
        lng: 14.42332,

    }
};

//CLON DEL OBJETO
// usar sprit para agregar algo mas a lo ya existente

const persona2 = {...persona};
persona2.nombre = 'Peter';

// console.table( persona);
console.log( persona );
console.log( persona2 );

