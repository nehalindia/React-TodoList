import "./style.css"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState(0)

  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add Item</button>
  </form>

  <h1 className="header">To Do List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
  // (
  //   <>
  //     <h1>Vite + React + Nehal.</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //     </div>
  //   </>
  // )
}


  {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}