
// // ------- TEMPLATE STRING ---------

//   //CONCATENACION
  const nombreCompleto = nombre + '' + apellido;
  const saludo = ` Hola `;
  const concatenar = `${nombre} ${apellido} ${ 1 + 1 }`;

  console.log( nombreCompleto );

  function getSaludo(nombre: string) {
    return 'Hola' + nombre;
  }

  console.log( `Texto: ${ getSaludo(nombre) }`)



