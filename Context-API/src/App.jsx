import './App.css'
import UserProvider from './context/UserProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Icon from './components/Icon'
function App() {
  return (
<>
<h1>Welcome to home page</h1>
<UserProvider>
  <Icon/> 
  <Login/>
  <Profile/>

</UserProvider>
</>
   
  )
}



export default App
