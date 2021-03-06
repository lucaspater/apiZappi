import React from "react";
import {
  ButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductContainerStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";
import Increase from "../../UI/Increase/Increase";
import Count from "../../UI/Count/Count";
import Submit from "../../UI/Submit/Submit";

const ModalCart = ({ closeModal }) => {
  return (
    <ContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key="cart-modal"
    >
      <CloseButtonStyled
        whileTap={{ scale: 0.95 }}
        onClick={() => closeModal(false)}
      >
        X
      </CloseButtonStyled>
      <TitleStyled>
        <h1>Tus Productos</h1>
      </TitleStyled>
      <div>
        <ProductContainerStyled>
          <img
            src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/Bennazianna_t40kz2.png"
            alt=""
          />
          <div>
            <p>Bennazianna</p>
            <p>La más completa</p>
            <PriceStyled>$3650</PriceStyled>
          </div>
          <div>
            <Increase>-</Increase>
            <Count>1</Count>
            <Increase secondary>+</Increase>
          </div>
        </ProductContainerStyled>
        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <span>$4890</span>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envio</p>
            <span>Gratis</span>
          </EnvioStyled>
          <hr />
          <TotalStyled>
            <p>Total:</p>
            <PriceStyled>$4980</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
            <Submit value="Iniciar pedido"/>
          </ButtonContainerStyled>
        </PriceContainerStyled>
      </div>
    </ContainerStyled>
  );
};

export default ModalCart;
