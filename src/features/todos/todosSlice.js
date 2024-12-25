import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello, Welcome!", isEditing: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditing: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log(text, "Here");
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },
    toggleEdit: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      console.log(action.payload, todo);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleEdit } =
  todoSlice.actions;
export default todoSlice.reducer;
