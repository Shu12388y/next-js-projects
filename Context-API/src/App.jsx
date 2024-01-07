import './App.css'
import Login from "./components/Login"
import Profile from './components/Profile'
import UserProvider from './context/UserProvider'
function App() {

  return (
    
    <UserProvider>
      <h1>Welcome to React App</h1>
     <Login/>
     <Profile/>

    </UserProvider>
    
  )
}

export default App
