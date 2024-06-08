
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from "../features/todos/todosSlice"


function Todos(){

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="flex lg:flex-col flex-row lg:items-center lg:justify-between mt-2">
            {todos.map((todo) => (
            <li 
            className="flex w-full max-w-xl items-center space-x-2 mt-2"
            key={todo.id}>
                <span
                className="flex h-10 w-1/2 rounded-md  bg-slate-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                {todo.text}
                </span>
                <button 
                onClick={() => dispatch(editTodo(todo.id))}
                
                
                className="rounded-md bg-green-500/80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >Edit  </button>
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                
            
                className="rounded-md bg-red-500/80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >Delete </button>
            </li>
            
        ))}

      </div>
            

    )
}

export default Todos