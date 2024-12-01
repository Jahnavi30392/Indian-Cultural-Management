import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CulturalEnthusiast from './components/CulturalEnthusiast';
import ContentCreator from './components/ContentCreator';
import TourGuide from './components/TourGuide';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Temple from './components/temples';
import Kedarnath from './components/Kedarnath';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<NavBar/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enthusiast" element={<CulturalEnthusiast />} />
        <Route path="/creator" element={<ContentCreator />} />
        <Route path="/tourguide" element={<TourGuide />} />
        <Route path="/admin-dashboard" element={<Admin/>} />
        <Route path="/user-dashboard" element={<Home/>} />
        <Route path="/temples" element={<Temple />} />
        <Route path="/kedarnath" element={<Kedarnath />} />

      
        </Routes>
      </div>
    </Router>
  );
}

export default App;