import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar';
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './Page/Home'
import { Users } from './Page/Users'
import { About } from './Page/About'
//https://telegra.ph/file/dad2a885846c4aa40318e.png

function App() {
  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route index element={<Users />} />
        <Route path='/about' element={<About />} />
        <Route index element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
