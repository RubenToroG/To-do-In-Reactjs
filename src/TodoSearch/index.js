import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
        <input placeholder="Busqueda Avanzada"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };