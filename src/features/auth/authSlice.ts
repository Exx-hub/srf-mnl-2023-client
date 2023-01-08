import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthState {
  userId: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  userId: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeCredentials: (state, action: PayloadAction<AuthState>) => {
      const { userId, accessToken } = action.payload;

      state.userId = userId;
      state.accessToken = accessToken;
    },
    clearCredentials: (state) => {
      state.userId = null;
      state.accessToken = null;
    },
  },
});

export const { storeCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) =>
  state.authState.accessToken;
export const selectCurrentUserId = (state: RootState) => state.authState.userId;
