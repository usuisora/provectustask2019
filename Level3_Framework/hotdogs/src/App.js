
import React from "react";
import './App.css';
import Router from './router/Router'
import UpCover from './components/UpCover';
import Footer from "./components/Footer";
function App() {
  return (
    <div className ='.body'>
        <UpCover/>
          <Router/>
          <Footer/>
    </div>
  );
}

export default App;
