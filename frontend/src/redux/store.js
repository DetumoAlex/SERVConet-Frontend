import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice"; // This imports the default export directly

const store = configureStore({
  reducer: {
    auth: authReducer, // This is correctly adding the auth reducer to the store
  },
});

export default store;
