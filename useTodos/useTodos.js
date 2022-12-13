import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [] , init);

    const pendingTodos = todos.filter( todo=> todo.done == false );
    const todosCounter = todos.length;

    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify( todos ));
    }, [todos])
    

    const actionDispatch = (type , payload)=>{
        
        const action = {
            type,
            payload
        }

        dispatch(action);
    }

    const handleNewTodo = (payload) => {
        const type = 'add todo';
        actionDispatch(type , payload);
    }

    const handleDeleteTodo = (payload) =>{
        const type = 'delete todo';
        actionDispatch(type , payload);
    }

    const handleCrossOutTodo = (payload) =>{
        const type = 'cross out todo';
        actionDispatch(type , payload);
    }

    return {
        todos,
        handleNewTodo,
        handleCrossOutTodo,
        handleDeleteTodo,
        pendingTodos,
        todosCounter
    }
}