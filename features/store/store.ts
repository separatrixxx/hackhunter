import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import teamsSlice from "../teams/teamsSlice";
import usersSlice from "../users/usersSlice";
import tokenSlice from "../token/tokenSlice";
import userSlice from "../user/userSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      teams: teamsSlice,
      users: usersSlice,
      token: tokenSlice,
      user: userSlice,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);