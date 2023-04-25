import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: myInitialState.filter,
  reducers: {
    changeSearchValue(state, action) {
      state.search = action.payload
    }
  }
})

export const { changeSearchValue } = filterSlice.actions
export const filterReducer = filterSlice.reducer;














/*import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: myInitialState.counter,
  reducers: {
    incrementCounter(state) {
      return state + 1
    },
    decrementCounter(state) {
      return state - 1
    },
  }
})

export const { incrementCounter, decrementCounter } = counterSlice.actions
export const counterReducer = counterSlice.reducer*/
