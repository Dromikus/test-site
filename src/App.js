import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar';
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './Page/Home'
import { Profile } from './Page/Profile'
import { About } from './Page/About'

function App() {
  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/users' element={<Profile />} />
        <Route index element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route index element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
