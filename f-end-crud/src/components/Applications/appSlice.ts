import { createSlice } from "@reduxjs/toolkit";
import { fetchAllApplications } from "../../apiThunks";

interface AppDataType {
  appId: number;
  status: string;
  title: string;
  company: string;
  appDate: string;
  offeredSalRange: string | null;
  expectedSalRange: string;
  via: string;
  location: string;
  notes: string;
  contactPerson: string;
  url: string | null;
  followUpDate: string | null;
}

interface AppStateType {
  isLoading: boolean;
  isError: boolean;
  appData: AppDataType[] | [];
}

const initialState: AppStateType = {
  isLoading: false,
  isError: false,
  appData: [],
};

const applications = createSlice({
  name: "applications",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllApplications.pending, (state) => {
      state.isLoading = true;
    });
  },
});
