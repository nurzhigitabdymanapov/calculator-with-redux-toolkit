import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  result: 0,
};

export const TodoSlice = createSlice({
  initialState,
  name: "todos",
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    deleteAll: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== el.id);
    },
    completedTodo: (state, action) => {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload) {
          el.check = !el.check;
        }
        return el;
      });
    },
    saveTodo: (state, action) => {
      state.todos = state.todos.map((el) => {
        console.log(action.payload);
        if (el.id === action.payload.id) {
          el.title = action.payload.title;
          el.id = action.payload.id;
        }
        return el;
      });
    },
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
    reset: (state) => {
      state.result = 0;
    },
  },
});
export const todosActions = TodoSlice.actions;
