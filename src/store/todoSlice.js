import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList : []
  },
  reducers: {
    // for getting initial Todo Items form localstorage
    getInitialTodo : (state,action) => {
        state.todoList = action.payload
    },

    //Adding single Todo Item
    addTodo: (state, action) => {
      state.todoList.unshift(action.payload)
      //storing item into localstorage.
      localStorage.setItem('items',JSON.stringify(state.todoList))
    },

    //Deleting single items from TodoList.
    deleteTodo: (state, action) => {
      //filtering out item from todoList
        const newTodo = state.todoList.filter((item) => {
        return item != action.payload
      })
      state.todoList = [...newTodo]
      //updating todoList into localstorage.
      localStorage.setItem('items',JSON.stringify(state.todoList))
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
