import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  // (state) => state["auth"], // we use feature selector instead
  selectAuthState,
  (auth) => !!auth.user // if user profile: true, else false
);

export const isLoggedOut = createSelector(
  // we combine selectors together
  isLoggedIn,
  // projector function
  (loggedIn) => !loggedIn
);
