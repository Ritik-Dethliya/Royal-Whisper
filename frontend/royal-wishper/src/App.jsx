import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login'
import SignInPage from './Pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
    </Routes>
    </>
  )
}

export default App
