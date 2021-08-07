import React from  'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';

const SampleComponent = () => {
    return (
        <div>
            <h1>
                I am the home page!!!
            </h1>
        </div>
    )
}

const App = () => {
    return (
        <div>
             <BrowserRouter>
                <div>
                    <Route path="/" component={SampleComponent} />
                </div>
             </BrowserRouter>
        </div>
    );
};

export default App;