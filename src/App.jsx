import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './pages/weather'
import Time from "./pages/Time"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Weather/>
     </>
  )
}

export default App
