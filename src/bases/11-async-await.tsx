

// para manejo de ERRORES debemos usar TRY, CATCH y si queremos FINALLY
const getImage = async () => {

  try {
                        // AWAIT para que espere a que esa promesa termine para continuar, pasa de asincrono a sincrono
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await respuesta.json();

    const { url } = data.images.original;

  } catch (error) {
    //error
  }
};

getImage();
