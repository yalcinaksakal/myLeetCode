import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSolutionsLength: 0,
  openSearch: "",
  privateSearch: "",
};

const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    setLength(state, action) {
      state.openSolutionsLength = action.payload;
    },
    setSearchStrings(state, action) {
      state.openSearch = action.payload.openSearch;

      state.privateSearch = action.payload.privateSearch;
    },
  },
});

export const webActions = webSlice.actions;

export default webSlice.reducer;
