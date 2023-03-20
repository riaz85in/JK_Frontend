import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQty: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      itemInCart.quantity++;
    },
    decrementQty: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart && itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        if (itemInCart) {
          itemInCart.quantity--;
        } else {
          console.log("No item in cart");
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
