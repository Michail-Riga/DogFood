const { createSlice } = require("@reduxjs/toolkit");
const { initialData } = require("../initialValues");

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialData.favorites,
  reducers: {
    
    addToFavorites(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        product.count++
        return;
      }
      state.push({ _id: action.payload, count: 1, isSelected: false })
    },
    deleteFromFavorites(state, action) {
      return state.filter(product => product._id !== action.payload)
    },
    incrementFavorites(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        product.count++
        return;
      }
    },
    decrementFavorites(state, action) {
      const product = state.find(el => el._id === action.payload)

      if (product) {
        if (product.count > 1) {
          product.count--;
          return;
        }
        return state.filter(product => product._id !== action.payload)
      }
    }
  }
})
export const { addToFavorites, deleteFromFavorites, incrementFavorites, decrementFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
