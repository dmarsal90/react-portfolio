import { useState } from 'react'
import './App.css'
import { NavBar } from './assets/components/NavBar'
import { Banner } from './assets/components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default App
