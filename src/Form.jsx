import { useState } from "react"

export function Form(){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        // SetTodos(currentTodo =>{
        //   return [
        //     ...currentTodo,
        //     {id: crypto.randomUUID(), 
        //         title: newItem, completed: false},
        //   ]
        // })
        setNewItem("") 
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={newItem} 
          onChange={e => setNewItem(e.target.value)}
           placeholder="Add List"/>
        </div>
        <button className="btn">Add Item</button>
      </form>
    )
}