import React from "react";
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: true },
//   { text: 'Compra mes', completed: true },
//   { text: 'Compra semana', completed: false }
// ];

function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });




  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };

}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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



  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


  return (
    <AppUI
      loading={loading}
      error ={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
