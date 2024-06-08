
import './App.css'
import AddTodo from './Components/addTodo'
import Todos from './Components/todos'

function App() {

  return (
    <>
    <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="w-80 sm:w-auto flex flex-col lg:flex-row lg:items-center lg:justify-between ">
        <div className="mt-10 w-full md:w-2/2 lg:mt-0">
        <h1 className=" text-3xl flex lg:flex-col flex-row lg:items-center lg:justify-between m-4">A Simplie Todo App using ReduxToolkit</h1>
            <AddTodo/>
            <Todos />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
