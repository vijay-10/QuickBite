import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.hasOwnProperty(action.payload[0]))
        state.items[action.payload[0]] = action.payload[1];
      state.items[action.payload[0]].quantity++;
      state.totalItems += 1;
    },
    removeItem: (state, action) => {
      if (state.items[action.payload[0]].quantity > 1)
        state.items[action.payload[0]].quantity--;
      else delete state.items[action.payload[0]];
      state.totalItems -= 1;
    },
    clearCart: (state) => {
      for (let item in state.items) delete state.items[item];
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
