import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './assets/components/NavBar';
import {Banner} from './assets/components/Banner';
import {About} from "./assets/components/About";
import {Skills} from "./assets/components/Skills";
import {Projects} from "./assets/components/Projects";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default App
