import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Mynav from './Components/Mynav'
import Home from './Pages/Home'
import Menu from './Pages/Menu'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
    </>
  )
}

export default App
