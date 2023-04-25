import { createSlice } from "@reduxjs/toolkit";
import { LC_NAMING, myInitialState } from "../initialState";

const userSlice = createSlice({
  name: 'user',
  initialState: myInitialState.user,
  reducers: {
    setUpUser (_, action) {      
      return action.payload
    },
    cleanUser: () => {
      localStorage.removeItem(LC_NAMING)
      return myInitialState.user
    }
  }
})

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer;















/*import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";
import { v4 as uuidv4 } from 'uuid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: myInitialState.todos,
  reducers: {
    updateTodoStatus(state, action) {
      const currentTodo = state.find(todo => todo.id === action.payload)

      if (currentTodo) currentTodo.status = !currentTodo.status
    },
    deleteList() {
      return myInitialState.todos
    },
    deleteCurrent(state, action) {
      return state.filter(({ id }) => id !== action.payload)
    },
    // prepare существует чтобы подготовить action payload
    addToList: {
      reducer(state, action) {
        state.unshift(action.payload)
      },                                       // lj,fdkztn njlj добавлят тодо
      prepare(title) {
        return {
          payload: {
            title,
            id: uuidv4(),
            status: false
          }
        }
      }
    }
  }
})

export const { updateTodoStatus, deleteList, deleteCurrent, addToList } = todosSlice.actions
export const todosReducer = todosSlice.reducer*/
