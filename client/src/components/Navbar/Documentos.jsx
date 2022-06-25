import React from "react";

function Documentos(){

  const onSubmit = event => {
    event.preventDefault();
    CrearCodAlphanumerico();
  };


  function CrearCodAlphanumerico(){ //genera el codigo alphanumerico
    let jeje = document.getElementById("aronou").value; //agrega la palabra que se ingrese en el input de abajo
    var text = "";
    text += jeje + "-" ; //pa poner el guion que separa jeje
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 30; i++){ //cantidad de letras y numeros agregados aleatoriamente
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log("Alphanumerico: "+text);
    return text;
  }

  return (
    <div className="containerNavComponents">
      <h1>Generar numeros Alfanumericos</h1>
      <form onSubmit={onSubmit}>
      <input type="text" className="navInput" id="aronou" placeholder="Digite 3 letras" maxLength="3" minLength="3" pattern="[A-Z,a-z]{3}" ></input><br/><br/>
      <button className="buttonStart" type="submit" >Generar</button>
      </form>
    </div>
  );

}

export default Documentos;
