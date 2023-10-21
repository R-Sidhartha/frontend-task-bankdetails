import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Bankdetails from './Components/Bankdetails';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  
  const [isMobileView, setIsMobileView] = useState(false);

  const checkIsMobileView = () => {
    const breakpoint = 768;

    if (window.innerWidth < breakpoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);
    return () => {
      window.removeEventListener("resize", checkIsMobileView);
    };
  }, []);

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home isMobileView={isMobileView}/>} />
        <Route exact path="/bankdetails" element={<Bankdetails isMobileView={isMobileView}/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
