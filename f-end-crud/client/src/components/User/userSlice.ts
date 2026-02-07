import { createSlice } from "@reduxjs/toolkit";
import { fetchAllApplications } from "../../apiThunks";
import type { RootState } from "../../store/store";

export interface UserDetailsType {
  userId: number;
  fullName: string;
  age: number;
  email: string;
  address: string;
  contact: string;
  currOrg: string;
  curSalary: string;
  skillSet: string[];
}

interface UserStateType {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  userData: UserDetailsType | null;
}

const initialState: UserStateType = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAllApplications.fulfilled,
        (state: UserStateType, action) => {
          state.isLoading = false;
          if (action.payload && action.payload.results.userDetails) {
            state.userData = { ...action.payload.results.userDetails };
          } else {
            state.isError = true;
            state.errorMessage =
              "No user data returned in payload for user details";
            //try and log the username from payload if possible
          }
        }
      )
      .addCase(
        fetchAllApplications.rejected,
        (state: UserStateType, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.error.message
            ? action.error.message
            : "Unknown error occured while fetching user data";
        }
      );
  },
});

export const userDetails = (state: RootState) => {
  return state.user.userData;
};

export default userSlice.reducer;
