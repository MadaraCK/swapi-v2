import React from 'react';
import './App.scss'
import People from './components/people/people'
import Contact from "./components/contact/contact";
import Info from "./components/info/info";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div className="bgc">
                <Menu/>
                <Routes>
                    <Route element={<Main/>} path="/" exact />
                    <Route element={<People/>} path="/people" />
                    <Route element={<Info/>} path="/info" />
                    <Route element={<Contact/>} path="/contact" />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;