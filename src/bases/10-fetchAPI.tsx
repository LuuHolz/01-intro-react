//Si la URL necesitara KEY
const apiKey = '123';
const ejPeticion = fetch(`https://api.escuelajs.co/api/v1/products/random?api_key=${ apiKey }`)


const peticion = fetch('https://api.escuelajs.co/api/v1/products');

peticion
.then( respuesta => respuesta.json() )
.then( data => { 
    const url = data.images.original.url 

})
.catch( console.warn )