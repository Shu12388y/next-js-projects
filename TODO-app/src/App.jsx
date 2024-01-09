import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoList'



function App() {
const [lists,setLists] = useState([])



const addTODO = (todo) => {
  setLists((prev)=>[...prev,{id:Date.now(),...todo}])
}


const updateTODO = (id,todo) => {
  setLists((prev)=> prev.map((prevtodo)=>prevtodo.id === id ? todo : prevtodo))
}

const deleteTODO = (id) => {
  setLists((prev)=> prev.filter((prevtodo)=>prevtodo.id !== id))
}


const toggleComplete = (id) => {
  setLists((prev)=> prev.map((prevtodo)=>prevtodo.id === id ? {...prevtodo,complete:!prevtodo.complete} : prevtodo))
}

// useEffect hook

useEffect(()=>{ 
  let lists=JSON.parse(localStorage.getItem("lists"))

  if(lists && lists.length > 0){
    setLists(lists)
  }


},[])

useEffect(()=>{
  localStorage.setItem("lists",JSON.stringify(lists))
},[lists])


  return (
    <>
    <h1>Welcome to TODO App</h1>
    <TodoProvider value={{lists,addTODO,deleteTODO,toggleComplete,updateTODO}}>
<TodoForm/>
<TodoItem/>
    </TodoProvider>
    
     
    </>
  )
}

export default App
