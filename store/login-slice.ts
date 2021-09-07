import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  uid: "",
  email: "",
  displayName: "",
  userPicture: "",
  isLoggingIn: false,
  difficult: 0,
  easy: 0,
  language: "javascript",
  medium: 0,
  theme: "tomorrow",
  personal: 0,
  total: 0,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const {
        email,
        displayName,
        picture,
        uid,
        difficult,
        easy,
        language,
        medium,
        theme,
        personal,
        total,
      } = action.payload;
      state.isLoggedIn = true;
      state.displayName = displayName;
      state.email = email;
      state.userPicture = picture;
      state.uid = uid;
      state.isLoggingIn = false;

      state.difficult = 2;
      state.easy = 2;
      state.language = language;
      state.medium = 2;
      state.theme = theme;
      state.personal = 2;
      state.total = 8;

      // state.difficult = difficult;
      // state.easy = easy;
      // state.language = language;
      // state.medium = medium;
      // state.theme = theme;
      // state.personal = personal;
      // state.total = total;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.userPicture = "";
      state.uid = "";
      state.isLoggingIn = false;

      state.difficult = 0;
      state.easy = 0;
      state.language = "javascript";
      state.medium = 0;
      state.theme = "tomorrow";
      state.personal = 0;
      state.total = 0;
    },
    setLoggingIn(state, action) {
      state.isLoggingIn = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
