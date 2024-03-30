import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});
export const { setOpen } = dialogSlice.actions;
export default dialogSlice.reducer;
