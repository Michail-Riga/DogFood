import { configureStore } from "@reduxjs/toolkit";
import { LC_NAMING, getInitialState } from './initialState'
import { userReducer } from "./slices/userSlice";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitialState()
})

store.subscribe(() => {
  localStorage.setItem(LC_NAMING, JSON.stringify(store.getState()))
})
















/*import { getInitState } from './initialState'
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from './slices/todosSlice';
import { counterReducer } from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer
  },
  preloadedState: getInitState(),
  devTools: true, // по дефолту итак тру
})

store.subscribe(
  () => localStorage.setItem('reduxState', JSON.stringify(store.getState()))
)*/
