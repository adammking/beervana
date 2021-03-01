import React from 'react';
import './App.css';
import Routes from "./Routes"
import Navbar from "./components/Navbar"
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useLocalStorage("token")


  return (
    <div className="App">
        <Navbar />
        <Routes />
    </div>
  );
}

export default App;
