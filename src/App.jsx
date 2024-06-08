
import './App.css'
import AddTodo from './Components/addTodo'
import Todos from './Components/todos'

function App() {

  return (
    <>
    <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mt-10 w-full md:w-3/3 lg:mt-0">
            <AddTodo/>
            <Todos />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
