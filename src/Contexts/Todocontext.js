import {createContext, useContext} from 'react'

export const TodoContext=createContext({
    todos: [
        {
            id:1,
            todo:"hello",
            checked:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo: (todo,id) =>{},
    deleteTodo: (id) =>{},
    toggleChecked: (id) =>{}
})
export const useTodoContext=()=>useContext(TodoContext)

export const TodoProvider = TodoContext.Provider

