import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from "./components/Contact";
import './App';
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default App;