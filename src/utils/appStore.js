import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // can have multiple slices reducer here as this reducer is the reducer of the whole app(redux store)
    // user : userReducer
  },
});

export default appStore;
