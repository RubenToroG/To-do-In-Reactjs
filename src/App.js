import React from "react";
import { TodoCounter } from './TodoCounter.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { TodoSearch } from './TodoSearch.js';
import { CreateTodoButton } from './CreateTodoButton.js';

//import './App.css';
const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Compra mes', completed: true },
  { text: 'Compra semana', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //filtrando los todos para ver cuales tienen la propiedad completed como true, !!
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    
  }

  return (
    <React.Fragment>  {/*renderiza una etiqueta invisible para envolver a todos los componentes*/}
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
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
