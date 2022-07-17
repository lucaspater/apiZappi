import React from "react";
import { BorderDecoration, CardCategoria } from "./CategoriasStyles";

const Categoria = ({imgSource, title}) => {
  return (
    <CardCategoria>
      <img src={imgSource} alt="" />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
