setTimeout(() => {
  let pausarConteo;

  // Funcion para asignar Enter al boton Start
  const asignarEnter = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        btnStartClick();
      }
    });
  };

  // Funcion que inicia el conteo
  const iniciarConteo = () => {
    pausarConteo=false;
    txtTiempo.blur();                                      // Desactivo Cursor (elimino foco)
    estadoAlarma.style.background = "green"; 
    estadoAlarma.textContent = "Conteo Iniciado";
    tiempoParada = parseInt(txtTiempo.value) * 1000; //Tiempo de Parada
    let tiempo = parseInt(txtTiempo.value);                //Tiempo Mostrado en pantalla

    setTimeout(() => {                                     //Segundos a Decrementar
      clearInterval(detenerConteo);
      // estadoAlarma.style.background = "red";
      // estadoAlarma.textContent = "Apagado"
    }, tiempoParada  + 50);

    let detenerConteo = setInterval(() => {                //variable para detener conteo           
        if(!pausarConteo){
          tiempo--;                                            
          txtTiempo.value = tiempo;                        //Mostrar Conteo cada segundo (intervalo)
          if(tiempo===0){
            estadoAlarma.style.background = "red";
            estadoAlarma.textContent = "Apagado";
          }
        }else{
          tiempoParada=tiempo;
          estadoAlarma.style.background = "red";
          estadoAlarma.textContent = "Conteo Detenido";
        }
    }, 1000);                                              
  };

  // Funcion que detiene el conteo
  const detenerConteo = () => {
    txtTiempo.blur();                                       // Desactivo Cursor (elimino foco)
    pausarConteo=true;  
  };

  //PROGRAMA PRINCIPAL
  const txtTiempo = document.getElementById("txtTiempo");       
  const btnStart = document.getElementById("btnStart");         
  const btnStop = document.getElementById("btnStop");
  const estadoAlarma = document.getElementById("estadoAlarma");
  asignarEnter();
  btnStart.addEventListener('click',iniciarConteo);
  btnStop.addEventListener('click',detenerConteo);
}, 500);