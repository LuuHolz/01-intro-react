import { getHeroesById } from './bases/08-impt-expt-find-filter'


// Las promesas son asincronas porque porque están diseñadas para manejar 
// operaciones que no se completan inmediatamente y pueden tardar un tiempo 
// indeterminado en resolverse. 

// ASYNC

const getHerpeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const p1 = getHeroeById( id );
            if( p1 ) {
                resolve( p1 );

            } else {
                reject( 'No se encontro el heroe' );
            }
        }, 2000)
    })


}

getHerpeByIdAsync(4)
    // Respuesta satisfactoria
    .then( console.log );
    
    // error
    .catch( console.warn );