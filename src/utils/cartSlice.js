import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem is "action" and corresponding function is "reducer fn"
    // modify the state based on the action, state is inital state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      // mutating the state here
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      // state.items.length = 0;
    },
  },
});

// export actions and reducers
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
