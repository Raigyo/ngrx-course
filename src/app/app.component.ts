import { AppState } from "./reducers/index";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isLoggedIn, isLoggedOut } from "./auth/auth.selectors";
import { login, logout } from "./auth/auth.actions";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  // injection of the store service as observable
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    // we can always suscribe to the store service and get data we need or transform them
    // ex:
    // this.store.subscribe((state) => console.log("store value: ", state));

    // We use selector instead following method,
    // because we just want to send data only once, when the state changes
    // this.isLoggedIn$ = this.store.pipe(map((state) => !!state["auth"].user));
    // this.isLoggedOut$ = this.store.pipe(map((state) => !state["auth"].user));

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
