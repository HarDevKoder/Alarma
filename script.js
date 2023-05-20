setTimeout(() => {
  // Instancio Elementos del DOM
  const btnStart = document.getElementById("btnStart");
  const txtTiempo = document.getElementById("txtTiempo");
  const btnStop = document.getElementById("btnStop");
  const resultados = document.getElementById("resultados");
  //variables Globales
  let cuenta;
  let proceso;
  txtTiempo.value=0;
  //Inicio Conteo
  btnStart.addEventListener("click", () => {
    cuenta = parseInt(txtTiempo.value)||0;
    if(cuenta===0){
      alert('Ingresa Tiempo ');
    }else{
      resultados.innerHTML="Conteo Iniciado";
      resultados.style.background="green";
      proceso = setInterval(() => {
        cuenta--;
        txtTiempo.value = cuenta;
        if(cuenta === 0){
          clearInterval(proceso);
          resultados.innerHTML="Conteo Finalizado";
          resultados.style.background="Red";
        }
      }, 1000);
    }
  });
  //Detengo Conteo
  btnStop.addEventListener("click",()=>{
    clearInterval(proceso);
    resultados.innerHTML="Conteo Pausado";
    resultados.style.background="red";
  })
}, 500);