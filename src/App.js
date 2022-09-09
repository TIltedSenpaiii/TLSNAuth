import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Signup from './components/pages/signup';
import Login from './components/pages/login';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Home></Home>} />
          <Route exact path="/signup"  element={<Signup></Signup>}></Route>
          <Route exact path="/login"  element={<Login></Login>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
