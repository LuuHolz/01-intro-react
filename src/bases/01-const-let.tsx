// ------- VARIABLES Y CONSTANTES ---------

  const nombre = 'Lu';
  let apellido = 'Holz';

  let valor = 5;
  //LO PUEDO REASIGNAR SI NO LE VUELVO A COLOCAR LET
  valor = 4; 

  //VARIABLES Y SU SCOPE
  if (true) {
    const nombre = 'Peter';

    //DEVUELVE 'PETER' 
    console.log(nombre)
  }
  //DEVUELVE 'LU'
  console.log(nombre)
