import React from  'react';
import { BrowserRouter , Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.css';
import NavBar from '../NavBar/NavBar';

const SampleComponent = () => {
    return (
        <div>
            <h1>
                I am the home page!!!
            </h1>
        </div>
    )
}

const SampleComponent2 = () => {
    return (
        <div>
            <h1>
                I am the about page!!!
            </h1>
        </div>
    )
}

const App = () => {
    return (
        <div>
             <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact" component={Contact} />
                </div>
             </BrowserRouter>
        </div>
    );
};

export default App;