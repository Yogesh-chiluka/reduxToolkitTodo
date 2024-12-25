
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo, toggleEdit} from "../features/todos/todosSlice"



function Todos(){

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    const [inputValue, setInputValue] = useState('');
    const handleUpdateTodo = (id, text) => {
        if (text.trim()) {
          dispatch(updateTodo({ id, text }));
        }
        setInputValue('')
      };
    



    return (
        <div className="flex lg:flex-col flex-col lg:items-center lg:justify-between mt-2">
            {todos.map((todo) => (
            <li 
            className="flex w-full max-w-xl items-center space-x-2 mt-2"
            key={todo.id}>
                  {todo.isEditing ? (
                                    <input
                                        type="text"
                                        defaultValue={todo.text}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className="flex overflow-hidden h-10 w-4/5 rounded-md  bg-slate-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                    ) : (
                                    <span 
                                    className="flex overflow-hidden h-10 w-4/5 rounded-md  bg-slate-200 border-r-4 border-slate-200 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    >{todo.text}</span>
                                    )
                    }
                <button
                onClick={() => {
                   handleUpdateTodo(todo.id, inputValue)
                    dispatch(toggleEdit(todo.id)) 
                   }
                }
                className="w-1/5  w-fit text-nowrap rounded-md bg-green-500/80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                {todo.isEditing ? 'Save' : 'Edit'}
                </button>
               
                <p>{todo.isEditing}</p>
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                
            
                className="w-1/5  w-fit text-nowrap rounded-md bg-red-500/80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >Delete </button>
            </li>
            
        ))}

      </div>
            

    )
}

export default Todos