import { createSlice } from "@reduxjs/toolkit";
import { fetchAllApplications, type FetchAllResponse } from "../../apiThunks";
import type { RootState } from "../../store/store";

export type AppStatus =
  | "Interview"
  | "Rejected"
  | "Withdrawn"
  | "Offered"
  | "Applied";

// export type AppAppliedVia =
//   | "Company Portal"
//   | "LinkedIn"
//   | "Naukri"
//   | "Referred"
//   | "Miscellaneous";

export interface AppDataType {
  appId: number;
  status: string;
  title: string;
  company: string;
  appDate: string;
  offeredSalRange: string | null;
  expectedSalRange: string | null;
  via: string;
  location: string;
  notes: string | null;
  contactPerson: string;
  appURL: string | null;
  followUpDate: string | null;
}

interface AppStateType {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  appData: AppDataType[] | [];
}

const initialState: AppStateType = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  appData: [],
};

const applicationSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllApplications.pending, (state) => {
        console.log("In pending state of fetchAllApplications");
        state.isLoading = true;
      })
      .addCase(
        fetchAllApplications.fulfilled,
        (state: AppStateType, action) => {
          console.log("In loading state of fetchAllApplications");

          state.isLoading = false;
          if (action.payload)
            if (action.payload.responseStatus === "failure") {
              state.isError = true;
              state.errorMessage = action.payload.results.errorMessage;
            } else {
              if (
                action.payload.responseStatus === "success" &&
                action.payload.results.appDetails
              ) {
                state.appData = [...action.payload.results.appDetails];
              }
            }
        }
      )
      .addCase(fetchAllApplications.rejected, (state: AppStateType, action) => {
        if (action.error.message) {
          state.isError = true;
          state.errorMessage = action.error.message;
        }
        //check what does action.payload and action.error/action.error.message log
      });
  },
});

export const getAllApplications = (state: RootState): AppDataType[] =>
  state.apps.appData;

// export const getFilteredApplications= (state:RootState):AppDataType[]=>{

// }

export default applicationSlice.reducer;
