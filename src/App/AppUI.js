import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index.js';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>  {/*renderiza una etiqueta invisible para envolver a todos los componentes*/}
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTodos.lenth) && <p>Crea tu primer TODO...</p>}

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

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
            setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };