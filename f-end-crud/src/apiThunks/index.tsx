import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllApplications = createAsyncThunk(
  "applications/fetchAll",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(`Inside fetchAllApplications thunk`);
    } catch (error: any) {
      console.error(`Error fetching applications: ${error}`);
      return rejectWithValue(error || "Unknown error");
    }
  }
);

export const addNewApplication = createAsyncThunk(
  "applications/addedNew",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(`Inside addNewApplication thunk`);
    } catch (error: any) {
      console.error(`Error fetching applications: ${error}`);
      return rejectWithValue(error || "Unknown error");
    }
  }
);

export const updatedApplication = createAsyncThunk(
  "applications/updatedApplication",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(`Inside updatedApplication thunk`);
    } catch (error: any) {
      console.error(`Error fetching applications: ${error}`);
      return rejectWithValue(error || "Unknown error");
    }
  }
);
