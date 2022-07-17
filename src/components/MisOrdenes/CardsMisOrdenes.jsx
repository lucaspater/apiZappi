import CardMisOrdenes from "./CardMisOrdenes";
import {
  MisOrdenesContainerStyled,
  PedidoContainerStyled,
} from "./CardMisOrdenesStyles";
import { pedidos } from "../../data/MisOrdenes";

const CardsMisOrdenes = () => {
  return (
    <MisOrdenesContainerStyled>
      {PedidoContainerStyled.map((pedido) => (
        <CardMisOrdenes
          key={pedido.id}
          title={pedido.title}
          imgSource={pedido.img}
          pedido={pedido.pedido}
          price={pedido.price}
          status={pedido.status}
        />
      ))}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
