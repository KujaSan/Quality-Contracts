import * as React from "react";
import {Routes, Route} from "react-router-dom";

import './styles/main.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
