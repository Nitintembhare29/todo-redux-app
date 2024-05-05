import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        isCompleted: false,
      };
      if (action.payload.title.trim() != "") {
        state.push(newTodo);
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
