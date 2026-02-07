import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserDetailsType } from "../components/User/userSlice";
import type { AppDataType } from "../components/Applications/appSlice";
import appData from "../mockData/mockApps.json";
import userData from "../mockData/mockUsers.json";

export interface FetchAllResponse {
  responseStatus: "success" | "failure";
  results: {
    userDetails: UserDetailsType | null;
    appDetails: AppDataType[] | null;
    errorMessage: string | null;
  };
}

export interface FetchAllPayload {
  username: string;
  email: string;
  password: string;
}

export const fetchAllApplications = createAsyncThunk<
  FetchAllResponse,
  FetchAllPayload,
  { rejectValue: FetchAllResponse }
>("applications/fetchAll", async (payload, { rejectWithValue }) => {
  try {
    console.log(`Inside fetchAllApplications thunk`);
    return {
      responseStatus: "success",
      results: {
        userDetails: userData,
        appDetails: appData,
        errorMessage: null,
      },
    };
  } catch (error: any) {
    console.error(`Error fetching applications: ${JSON.stringify(error)}`);
    return rejectWithValue({
      responseStatus: "failure",
      results: {
        userDetails: null,
        appDetails: null,
        errorMessage: JSON.stringify(error),
      },
    });
  }
});

export const addNewApplication = createAsyncThunk(
  "applications/addedNew",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(`Inside addNewApplication thunk`);
    } catch (error: any) {
      console.error(`Error fetching applications: ${JSON.stringify(error)}`);
      return rejectWithValue(JSON.stringify(error) || "Unknown error");
    }
  }
);

export const updatedApplication = createAsyncThunk(
  "applications/updatedApplication",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(`Inside updatedApplication thunk`);
    } catch (error: any) {
      console.error(`Error fetching applications: ${JSON.stringify(error)}`);
      return rejectWithValue(JSON.stringify(error) || "Unknown error");
    }
  }
);
