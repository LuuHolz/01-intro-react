import { heroes, owners } from '../data/heroes';


export const getHeroesById = (id) => heroes.find( ( heroe ) => heroe.id === id );
export const getHeroesByOwner = (owner) => heroes.filter( ( heroe ) => heroe.owner === owner );


console.log( getHeroesById(2) );
console.log( getHeroesByOwner('DC') );

