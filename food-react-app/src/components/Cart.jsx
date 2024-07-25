import Modal from "./UI/Modal";
import { useContext } from "react";
import { CartContext } from "./store/cartContext";
import currencyFormatter from "../utils/formatter";
import { UserProgressContext } from "./store/UserProgressContext";
import Button from "./UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((totalCartItemPrice, item) => {
    return totalCartItemPrice + item.price * item.quantity;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseModal() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckOut() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseModal : null}
    >
      <h3>Your Cart</h3>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
        {totalPrice > 0 && (
          <Button onClick={handleGoToCheckOut}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
