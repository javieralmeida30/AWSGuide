import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Exams from './components/Exams';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Proyectos from './components/Proyectos';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/exams" element={<Exams />} />
                    <Route path="/tips" element={<Tips />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
