import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

// reducer output a new version of the store state then pass a function to the store
export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    // we return a new object instead modifying the existing one
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
