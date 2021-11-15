import React from "react";
import './TodoSearch.css';

function TodoSearch () {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <input placeholder="Busqueda Avanzada" 
        className="TodoSearch"
        onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };