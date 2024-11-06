import React from 'react'
import { useTodoContext } from '../Contexts';

function TodoForm() {
    const [todo, settodo] = React.useState("");
    const {addTodo} = useTodoContext()

    const add = (e)=>{
        e.preventDefault();
        if(!todo)
            return
        addTodo({todo, checked: false });
        settodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-2 border-slate-800 rounded-md px-3 outline-none duration-150 text-slate-800 bg-white py-1.5"
                value={todo} onChange={(e) => settodo(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-5 ml-3 py-1 outline-none border-slate-800 border-2 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

