import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialValues";

const userSlice = createSlice({
  name: 'user',
  initialState: initialData.user,
  reducers: {
    setNewUser(_, action) {
      return action.payload
    },
    clearUser() {
      return initialData.user
    }
  }
})
export const { setNewUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer





























