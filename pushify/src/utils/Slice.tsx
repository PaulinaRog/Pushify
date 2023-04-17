import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackData } from "../utils/Interface";
import { TrackListState } from "../utils/Interface";

const initialState: TrackListState = {
  trackData: null,
  trackList: [],
};

export const trackListSlice = createSlice({
  name: "trackList",
  initialState,
  reducers: {
    updateTrackData: (state, action: PayloadAction<TrackData>) => {
      state.trackData = action.payload;
    },
  },
});

export const { updateTrackData } = trackListSlice.actions;

export default trackListSlice.reducer;
