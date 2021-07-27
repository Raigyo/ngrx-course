import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";
import { UpdateStr } from "@ngrx/entity/src/models";

// Resolver

// Action
export const loadAllCourses = createAction(
  "[Courses Resolver] Load All Courses"
);

// Effect
export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Courses Loaded",
  props<{ courses: Course[] }>()
);
