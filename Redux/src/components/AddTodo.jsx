import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addhandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form onSubmit={addhandler} >
            <input type="text" name="todo" placeholder="Add Todo"  value={input} onChange={(e)=>{setInput(e.target.value)}}/>
       <button>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo