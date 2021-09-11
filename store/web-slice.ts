import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSolutionsLength: 0,
  openSearch: [],
  privateSearch: [],
  privateSolutionsLength: 0,
};

const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    setOpenSearchList(state, action) {
      state.openSearch = action.payload;
      state.openSolutionsLength = action.payload.length;
    },
    setPrivateSearchList(state, action) {
      state.privateSearch = action.payload;
      state.privateSolutionsLength = action.payload.length;
    },
    logout(state) {
      state.privateSearch = [];
      state.privateSolutionsLength = 0;
    },
    add(state, action) {
      state.privateSearch.push(action.payload);
      state.privateSolutionsLength++;
    },
    delete(state, action) {
      state.privateSearch = state.privateSearch.filter(
        el => el.no !== action.payload
      );
      state.privateSolutionsLength--;
    },
  },
});

export const webActions = webSlice.actions;

export default webSlice.reducer;
