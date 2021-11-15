import React from "react";
import { TodoCounter } from './TodoCounter.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { TodoSearch } from './TodoSearch.js';
import { CreateTodoButton } from './CreateTodoButton.js';

//import './App.css';
const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Compra mes', completed: true },
  { text: 'Compra semana', completed: false }
];

function App() {
  return (
    <React.Fragment>  {/*renderiza una etiqueta invisible para envolver a todos los componentes*/}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
