import React from "react";

import { Link } from "react-router-dom";
import {
  HrStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModalUserStyles";

const ModalUser = () => {
  return (
    <ModalContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key="cart-user"
    >
      <UsernameStyled>Hola Lucas Paternoster</UsernameStyled>
      <HrStyled />
      <Link to="/mis-ordenes">Mis Ordenes</Link>
      <p>Cerrar Sesion</p>
    </ModalContainerStyled>
  );
};
