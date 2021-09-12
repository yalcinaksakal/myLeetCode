import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSolutionsLength: 0,
  openSearch: [],
  privateSearch: [],
  privateSolutionsLength: 0,
  itemsPerPage: 10,
};

const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    setOpenSearchList(state, action) {
      state.openSearch = action.payload;
      state.openSearch.sort((a, b) => a.no - b.no);
      state.openSolutionsLength = action.payload.length;
    },
    setPrivateSearchList(state, action) {
      state.privateSearch = action.payload;
      state.privateSearch.sort((a, b) => a.no - b.no);
      state.privateSolutionsLength = action.payload.length;
    },
    logout(state) {
      state.privateSearch.length = 0;
      state.privateSolutionsLength = 0;
    },
    add(state, action) {
      state.privateSearch.push(action.payload);
      state.privateSearch.sort((a, b) => a.no - b.no);
      state.privateSolutionsLength++;
    },
    delete(state, action) {
      state.privateSearch = state.privateSearch.filter(
        el => el.no !== action.payload
      );
      state.privateSolutionsLength--;
    },
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const webActions = webSlice.actions;

export default webSlice.reducer;
