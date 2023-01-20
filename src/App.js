import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Components/header';
import Details from './pages/Details';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Certifications from './pages/certificates';
import ContactUs from './pages/Contact'
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <header>
          <Routes>
            <Route path="/" element={<Details/>}/>
            <Route path="/Qualification" element={<Qualification/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Certifications" element={<Certifications/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
          </Routes>
        </header>
    </Router> 
    </div>    
  );
}

export default App;
