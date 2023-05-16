import { configureStore } from '@reduxjs/toolkit'
import { getInitialData } from './initialValues'
import { userReducer } from './slices/userSlice'
import { REDUX_STATE_SUBSCR } from '../utils/token'
import { filterReducer } from './slices/filterSlice'
import { cartReducer } from './slices/cartSlice'
import { favoritesReducer } from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer,
    favorites: favoritesReducer
  },
  preloadedState: getInitialData()
})
store.subscribe(() => localStorage.setItem(REDUX_STATE_SUBSCR, JSON.stringify(store.getState())))












/*export const store = configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState: getInitialData()
})
store.subscribe(() => localStorage.setItem(REDUX_STATE_SUBSCR, JSON.stringify(store.getState())))*/













