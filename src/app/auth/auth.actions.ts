import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
  // Login Action
  "[Login Page] User Login", // source of the action
  props<{ user: User }>()
);

export const logout = createAction(
  "[Top Menu] Logout"
  // props<{ user: User }>()
);
