import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProdiver from './context/UserContextProvider'

function App() {

  return (
    <UserContextProdiver>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProdiver>
  )
}

export default App
