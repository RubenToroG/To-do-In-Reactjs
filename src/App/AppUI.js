import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';

function AppUI({ 
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
 }) {
    return (
        <React.Fragment>  {/*renderiza una etiqueta invisible para envolver a todos los componentes*/}
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

        </React.Fragment>
    );
}

export { AppUI };