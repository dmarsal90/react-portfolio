import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './assets/components/NavBar';
import {Banner} from './assets/components/Banner';
import {Skills} from "./assets/components/Skills";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Skills/>
        </div>
    )
}

export default App
