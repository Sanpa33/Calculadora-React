import React from "react";
import "../hojas-de-estilo/Pantalla.css"

// Otra forma de crear componentes funcionales con const
// Esta se suele utilizar para componentes mas sencillos

const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>


);


export default Pantalla