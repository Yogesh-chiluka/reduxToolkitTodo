# Todo App

This is a simple Todo application built with React, Redux Toolkit, and Tailwind CSS. It allows users to add, edit, and delete tasks.

  ![example.png](https://github.com/Yogesh-chiluka/reduxToolkitTodo/blob/main/reduxToolKitTodoApp.png)
## Features

- Add new todos
- Edit existing todos
- Delete todos
- Toggle edit mode for todos
- Responsive design with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Yogesh-chiluka/reduxToolkitTodo.git
   cd reduxToolkitTodo
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

1. **Add a Todo:**
   - Type a task into the input field.
   - Click the "Add Todo" button to add the task to the list.

2. **Edit a Todo:**
   - Click the "Edit" button next to a task to make the text editable.
   - Modify the text and click "Save" to update the task.

3. **Delete a Todo:**
   - Click the "Delete" button next to a task to remove it from the list.

## Project Structure

```plaintext
.
├── public
│   └── index.html
├── src
│   ├── app
│   │   └── store.js
│   ├── components
│   │   └── addTodo.jsx
|   |   └── todos.jsx
│   ├── features
│   │   └── todos
|   |       └── todosSlice.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

- **public/index.html:** The HTML file that serves the React app.
- **src/app/store.js:** The Redux store configuration.
- **src/components/addTodo.jsx:** The main AddTodo component.
- - **src/components/todos.jsx:** The main Todos component.
- **src/features/todos/todoSlice.js:** The Redux slice for managing todos.
- **src/App.js:** The main App component.
- **src/index.css:** The main CSS file with Tailwind CSS directives.
- **src/index.js:** The entry point of the React app.

## Redux Toolkit Slice

The `todoSlice.js` file defines the initial state and reducers for managing the todos:

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World", isEditing: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

    // add new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditing: false,
      };
      state.todos.push(todo);
    },

    // delele todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // update todo
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log(text, "Here");
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },

    // toggle Edit button
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

```

## Tailwind CSS Configuration

The `tailwind.config.js` file configures Tailwind CSS:

```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---
