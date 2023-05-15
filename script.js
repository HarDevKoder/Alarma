// Retardo para no interferir con el contenido de la pagina
setTimeout(() => {
  // *************************************************
  // Funcion que ejecuta acciones al presionar boton
  // *************************************************
  const presionarBoton = () => {
    // Desactivo Cursor (elimino foco)
    txtTiempo.blur();

    // Configuro aspecto del Cuadro de estado de la alarma
    estadoAlarma.style.background = 'green';
    estadoAlarma.textContent =  'Encendido';

    // Capturo el tiempo a contar
    let tiempo = parseInt(txtTiempo.value);
    const tiempoParada=tiempo*1000;

    conteoDescendente(tiempo, tiempoParada)
  };

  // **************************************************
  // Funcion para asignar Enter al boton Activar
  // **************************************************
  const asignarEnter = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        presionarBoton();
      }
    });
  };

  // *************************************************
  // Funcion para Contar descendentemente
  // *************************************************
  const conteoDescendente = (tiempo, tiempoParada) => {
    // Conteo Descendente (flag de detencion en variable)
    let detenerConteo = setInterval(() => {
      tiempo--;
      txtTiempo.value = tiempo;
    }, 1000);

    // Tiempo para detener conteo
    setTimeout(() => {
      clearInterval(detenerConteo);
        estadoAlarma.style.background = 'red';
        estadoAlarma.textContent =  'Apagado';
    }, tiempoParada);
  };

  // *************************************************
  // ********   PROGRAMA PRINCIPAL   ********
  // *************************************************
  // Instanciado de elementos del DOM
  const txtTiempo = document.getElementById("txtTiempo");
  const btnActivar = document.getElementById("btnActivar");
  const estadoAlarma = document.getElementById("estadoAlarma");
  
  //Asigno Tecla enter al Boton
  asignarEnter();
  
  // Acciones al Presionar Boton
  btnActivar.addEventListener('click', presionarBoton);

}, 10);
