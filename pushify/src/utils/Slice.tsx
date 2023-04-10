import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayType: "dark",
  styles: {
    dark: { color: "gray" },
    light: {
      color: "black",
    },
  },
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayType(state, action) {
      state.displayType = action.payload;
    },
  },
});

export const { setDisplayType } = displaySlice.actions;

export default displaySlice.reducer;
