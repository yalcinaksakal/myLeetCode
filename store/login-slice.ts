import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  displayName: "",
  userPicture: "",
  isLoggingIn: true,
  hard: 0,
  easy: 0,
  language: "javascript",
  medium: 0,
  theme: "tomorrow",
  personal: 0,
  total: 0,
  loginClicked: false,
  personalCounter: 0,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const {
        displayName,
        picture,
        hard,
        easy,
        language,
        medium,
        theme,
        personal,
        total,
        personalCounter,
      } = action.payload;
      state.isLoggedIn = true;
      state.displayName = displayName;
      state.userPicture = picture;
      state.isLoggingIn = false;
      state.hard = hard;
      state.easy = easy;
      state.language = language;
      state.medium = medium;
      state.theme = theme;
      state.personal = personal;
      state.total = total;
      state.loginClicked = false;
      state.personalCounter = personalCounter;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.displayName = "";
      state.userPicture = "";
      state.isLoggingIn = false;
      state.hard = 0;
      state.easy = 0;
      state.language = "javascript";
      state.medium = 0;
      state.theme = "tomorrow";
      state.personal = 0;
      state.total = 0;
      state.personalCounter = 0;
    },
    setLoggingIn(state, action) {
      state.isLoggingIn = action.payload;
    },
    setLang(state, action) {
      state.language = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setStatistics(state, action) {
      const { hard, easy, medium, personal, total, personalCounter } =
        action.payload;
      state.hard = hard;
      state.easy = easy;
      state.medium = medium;
      state.personal = personal;
      state.total = total;
      state.personalCounter = personalCounter;
    },
    setLoginClicked(state, action) {
      state.loginClicked = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
