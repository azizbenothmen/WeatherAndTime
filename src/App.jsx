import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './pages/weather'
import Time from "./pages/Time"
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <ToastContainer/>
     <Weather/>
     </>
  )
}

export default App
