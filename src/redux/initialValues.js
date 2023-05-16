import { REDUX_STATE_SUBSCR } from "../utils/token"

export const initialData = {
  user: {},
  filter: {
    search: ""
  },
  cart: [],
  favorites: [],
}
export const getInitialData = () => {
const localStorageData = localStorage.getItem(REDUX_STATE_SUBSCR)
return localStorageData ? JSON.parse(localStorageData) : initialData
}












