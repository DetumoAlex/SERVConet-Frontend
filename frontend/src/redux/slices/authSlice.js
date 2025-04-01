import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050/api";

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

// Register User Middleware
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/register", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login Middleware
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/login", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  token: typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",
  data: {},
  error: [], // Initialize error as an array
};

// Authentication Slice
const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.token = "";
      state.data = {};
      state.error = [];
    },
    clearError: (state) => {
      state.loading = false;
      state.error = [];
    },
  },
  extraReducers: (builder) => {
    // Register User
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
        state.token = ""; // Clear the token
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        if (typeof window !== "undefined") {
          sessionStorage.setItem("token", action.payload.token);
        }
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? [action.payload] : []; // Make sure error is an array
      });

    // Handle Login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
        state.token = ""; // Clear the token
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.data.token);
        }
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? [action.payload.message] : []; // Handle error messages
      });
  },
});

export const { clearState, clearError } = authSlice.actions;
export default authSlice.reducer;
