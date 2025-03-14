import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/resume';

import './App.css';

function App() { 
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Resume' element={<Resume/>}/>
    </Routes>
  </Router>
  
  )
}
  
export default App
