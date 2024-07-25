import { createContext, useReducer } from "react";

// create context for all components that need to access and edit the cart
export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  // state is array of cart Items for a user
  // create deep copy of cart, never directly mutate states
  const updatedCartItems = [...state.items];

  
  if (action.type === "ADD_ITEM") {
    // check if the item is already in the cart to get index
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // increase quantity if it is already in the cart
    if (existingItemIndex > -1) {
      const pickedItem = state.items[existingItemIndex];
      const updatedItem = {
        ...pickedItem,
        quantity: pickedItem.quantity + 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      // add item if it is not in the cart
      updatedCartItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedCartItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // check if the item is already in the cart to get index
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    
    // reduce number of items if the quantity is greater than 1
    if (state.items[existingItemIndex].quantity === 1) {
      updatedCartItems.splice(existingItemIndex, 1);
    } else {

      const pickedItem = state.items[existingItemIndex];
      const updatedItem = {
        ...pickedItem,
        quantity: pickedItem.quantity - 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedCartItems };
  }

  if (action.type === 'CLEAR_CART'){
    return { ...state, items: []};
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }

  function clearCart() {
    dispatchCartAction({
      type: "CLEAR_CART"
    })
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
