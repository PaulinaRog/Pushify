import { configureStore } from "@reduxjs/toolkit";
import trackListReducer from "./Slice";

const store = configureStore({
  reducer: {
    trackList: trackListReducer,
  },
});

export default store;
