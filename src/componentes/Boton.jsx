import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=")
  };

// Nota:
// El usar props.manejarClick(props.children) llama a una funcion y retorna un string
// Para decirle al div que tiene que manejar esa funcion tenemos que agregarle "() =>""
// Y asi vamos a definirle una funcoin anonima
// Entonces:
// onClick={props.manejarClick(props.children)}>        ---> Esto es una llamada a la funcion que retornaba su valor y lo remplazaba ahi adentro
// onClick={() => props.manejarClick(props.children)}>  ---> Pero ahora escribiendo la funcion flecha ahora si estamos escribiendo una funcion como tal dentro de las llaves
// Y eso es lo que se necesita para el oyente de eventos el EventListener
// Es muy importante saber por que el lugar de poner una llamada, tenemos que poner una funcion
// Esto le dice que queremos que se llame a una funcion, nuestro EventListener cuando ocurre un click
// Es una funcion que va a llamar otra funcion, es como una accion que va a estar ahi esperando el evento

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;