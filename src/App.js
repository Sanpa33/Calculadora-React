import './App.css';
import Boton from "./componentes/Boton.jsx"
import Pantalla from "./componentes/Pantalla.jsx"
import BotonClear from "./componentes/BotonClear.jsx"
import { useState } from "react";
import { evaluate } from "mathjs"

function App() {

  const [input,setInput] = useState("");

  // Podemos crear funciones y luego pasarlas como prop a nuestros componentes
  // Pero tambien si es una funcion pequeña es definir la funcion de forma anonima directamente en el componente
  // Como hacemos abajo en el componente BotonClear :)
  const agregarInput = value => {
    setInput(input + value);
  };

  const calcularResultado = () => {

    if(input){
      setInput(evaluate(input));
    } else {
      alert("Porfavor ingrese valores para realizar los calculos")
    }

  };



  return (
    <div className="App">
      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>  

        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>  

        <div className='fila'>
          <BotonClear manejarClear ={() => setInput("")}>
            Clear</BotonClear>
        </div>

        
      </div>
    </div>
  );
}

export default App;
