import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducer/cartreducer";
import ProductReducer from "../reducer/productreducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});
