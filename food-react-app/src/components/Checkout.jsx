import currencyFormatter from "../utils/formatter";
import Modal from "./UI/Modal";
import { useContext } from "react";
import { CartContext } from "./store/cartContext";
import Cart from "./Cart";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "./store/UserProgressContext";
import useHttps from "./hooks/useHttps";
import Error from "./UI/Error";

const requestData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((totalPriceInCart, item) => {
    return totalPriceInCart + item.price * item.quantity;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseModal() {
    userProgressCtx.hideCheckout();
  }

  function handleClearCart() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttps("http://localhost:3000/orders", null, requestData);

  function handleMakeOrder(event) {
    event.preventDefault();
    const formInputs = new FormData(event.target);
    const orderData = Object.fromEntries(formInputs.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: orderData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" onClick={handleCloseModal} textOnly>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending your Order!</span>;
  }

  if (!error && data) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClearCart}
      >
        <h2>Success!</h2>
        <p>Your Order was Successfully submitted</p>
        <p>You will receive a mail shortly</p>
        <p className="modal-actions">
          <Button onClick={handleClearCart}>Okay!</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={
        userProgressCtx.progress === "checkout" ? handleCloseModal : null
      }
    >
      <form onSubmit={handleMakeOrder}>
        <h2>Checkout</h2>
        <p>Total Amount is: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail" type="text" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to Submit Order" msg={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
