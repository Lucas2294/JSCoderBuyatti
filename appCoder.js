window.onload = function () {
    console.log("function called...");
    alert("Bienvenido, si quieres correr contesta las siguientes preguntas!")
    let nombre = prompt("Ingrese su nombre")
    let categoria = prompt("Cual categoría quieres correr?")
    if (categoria == 1 || categoria == 2 || categoria == 3) {
        let cantFechas = prompt("Cuantas fechas quieres correr? Máximo 12")
        if (cantFechas >= 1 && cantFechas <= 12) {
            respuesta(categoria, cantFechas, nombre)
        } else alert("Introdujiste un dato erroneo")
    }
  }

  function respuesta(categoria, fechas, nombre) {
      if (categoria == 1) {
          let precio = 200 * fechas;
          alert(`${nombre}, si quieres correr ${fechas} fechas, deberías abonar $ ${precio}`)
      } else if (categoria == 2) {
         let precio = 100 * fechas;
         alert(`${nombre}, si quieres correr ${fechas} fechas, deberías abonar $ ${precio}`)
      } else if (categoria == 3) {
        let precio = 50 * fechas;
        alert(`${nombre}, si quieres correr ${fechas} fechas, deberías abonar $ ${precio}`)
      }
  }