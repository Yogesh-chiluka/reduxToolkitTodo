import React,{ useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todos/todosSlice"


function AddTodo(){

const [input, setInput] = useState('')
const [errorMessage, setErrorMessage] = useState('');   
const dispatch = useDispatch() 

const addTodoHandler = (e) => {
	e.preventDefault()
  if (input.trim() === '') {
    setErrorMessage(' This field is required.');
    setInput('')
  } else {
    setErrorMessage('');
    dispatch(addTodo(input))
    // Proceed with form submission or other logic
  }
  setInput('')
}

return(

    
          <form className="flex lg:flex-col flex-row lg:items-center lg:justify-between" onSubmit={addTodoHandler}>
            <div className="flex w-full max-w-xl items-center space-x-2">

              
              <input
                className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={input}
                onChange={(e) =>{
                   setInput(e.target.value)
                  setErrorMessage('') 
                } 
              } 
                placeholder="Enter a todo ...."
              ></input>
              <button
                type="submit"
                className="w-1/5 w-14 sm:w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >Add Todo
              </button>
            </div>
            <div className="flex w-full max-w-xl items-center space-x-2 ">
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
          </form>
       
  )

}

export default AddTodo