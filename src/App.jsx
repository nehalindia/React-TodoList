import "./style.css"
import { useState } from "react"
// import { Form } from "./Form"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, SetTodos] = useState([])
  const [count, SetCount] = useState(0)
  // setNewItem("nehal") 

  function handleSubmit(e){
    e.preventDefault()
    SetTodos(currentTodo =>{
      return [
        ...currentTodo,
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("") 
  }

  function toggleTodo(id, completed){
    SetTodos(currentTodos => {
      return currentTodos.map(tod =>{
        if(tod.id === id){
          return { ...tod, completed}
        }

        return tod
      })
    })
  }

  function deleteTodo(id){
    SetTodos(currentTodos =>{
      {() => SetCount((count) => count - 1)}
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" value={newItem} 
      onChange={e => setNewItem(e.target.value)} placeholder="Add List"/>
    </div>
    <button className="btn" onClick={() => SetCount((count) => count + 1)}>
      Add Item</button>
  </form>

  <h1 className="header">To Do List</h1>
  <ul className="list">
    {todos.length === 0  && "No Todo List"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} 
        className="btn btn-danger">Delete</button>
      </li>
      )
    })}
  </ul>
  {/* <input type="checkbox" /> */}
  <div>
    <button className="counter">
      <h5> Item count is {count} </h5>
    </button>
  </div>
  </>
  )

}


  {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}