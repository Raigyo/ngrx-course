# NgRx (with NgRx Data) - The Complete Guide

June 2021

> 🔨 From udemy: [NgRx (with NgRx Data) - The Complete Guide - Vasco Cavalheiro / Angular University](https://www.udemy.com/course/ngrx-course/).

---

![logo](_readme-img/logo.png)

ReactiveX is a library for composing asynchronous and event-based programs by using observable sequences.

It extends the observer pattern to support sequences of data and/or events and adds operators that allow you to compose sequences together declaratively while abstracting away concerns about things like low-level threading, synchronization, thread-safety, concurrent data structures, and non-blocking I/O.

In this application, the store helps to manage states for:

- Authentication
- Local storage for session (side effect)

## To Run the Development Backend Server

We can start the sample application backend with the following command:

    `npm run server`

This is a small Node REST API server.

## To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    `npm start`

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

## Generate store for aspecific module

`ng generate store auth/Auth --module auth.module.ts`

```batch
CREATE src/app/auth/reducers/index.ts (359 bytes)
UPDATE src/app/auth/auth.module.ts (1221 bytes)
```

_src/app/auth/auth.module.ts_

```ts
@NgModule({
  imports: [
    // ...
    StoreModule.forFeature("auth", fromAuth.reducers),
  ],
```

![logo](_readme-img/devtool-01.png)

## Dependancies

- [NgRx Store](https://ngrx.io/guide/store/why): NgRx Store provides state management for creating maintainable, explicit applications through the use of single state and actions in order to express state changes. In cases where you don't need a global, application-wide solution to manage state, consider using NgRx ComponentStore which provides a solution for local state management.

`ng add @ngrx/store`

`ng add @ngrx/store-devtools`

## Concepts

- NgRx store provides reactive state management for the angular application. NgRx store is the redux implementation developed specifically for angular applications and provides RxJS observable API.
- State is an immutable data structure that is a single source of truth for the whole application.
- NgRx Actions represent the unique events in the application which may be used to perform state transition or trigger side-effects.
- NgRx Reducers are pure functions that react to Actions to perform state transitions.
- NgRx Selectors are pure functions that select, derive, or compose a slice of the state.
- NgRx Effects allow the isolation of side-effects.

### Pipes

Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions you can use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once.

### Tap

Can perform side effects with observed data but does not modify the stream in any way. Formerly called do(). You can think of it as if observable was an array over time, then tap() would be an equivalent to Array.forEach().

### Noop

angular.noop is an empty function that can be used as a placeholder when you need to pass some function as a param.

### Side effect

A side effect is when a function relies on, or modifies, something outside its parameters to do something. For example, a function which reads or writes from a variable outside its own arguments, a database, a file, or the console can be described as having side effects. Another exemple is to take a data from the NgRX store (after the reducers linked to the action have been triggered)then use it as persistent data using the local storage from browser.

### NgRx Actions

Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions. Dispatching doesn't affect the store state.

### NgRx Selectors

Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state:

- Portability
- Memoization
- Composition
- Testability
- Type Safety

When using the createSelector and createFeatureSelector functions @ngrx/store keeps track of the latest arguments in which your selector function was invoked. Because selectors are pure functions, the last result can be returned when the arguments match without reinvoking your selector function. This can provide performance benefits, particularly with selectors that perform expensive computation. This practice is known as memoization.

## Useful links

- [ngrx-course](https://github.com/angular-university/ngrx-course)
- [ReactiveX](http://reactivex.io/)
- [The Not-So-Scary Guide to Functional Programming](https://www.yld.io/blog/the-not-so-scary-guide-to-functional-programming/)
- [Reactive State management in the angular - NgRx Store, actions, selectors](https://www.initgrep.com/posts/javascript/angular/state-management-in-angualar-using-ngrx)
- [Understanding Angular Guards](https://codeburst.io/understanding-angular-guards-347b452e1892)
