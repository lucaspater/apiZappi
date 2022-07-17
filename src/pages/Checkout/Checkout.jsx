import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import { ContainerCheckoutStyled } from "./CheckoutStyles";
import ProductsCheckout from "../../components/Checkout/Products/ProductsCheckout";

const Checkout = () => {
  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm />
        <ProductsCheckout />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
