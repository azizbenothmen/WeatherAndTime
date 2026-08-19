import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from '/src/pages/Weather.jsx'
import Time from "/src/pages/Time.jsx"
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
