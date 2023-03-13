import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducer/cartreducer";


export default configureStore ({
    reducer:{
        cart:CartReducer
    }
})