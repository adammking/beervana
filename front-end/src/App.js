import React from 'react';
import './App.css';
import Routes from "./Routes"
import Navbar from "./components/Navbar"
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  let [ token, setToken ] = useLocalStorage("token")


  return (
    <div className="App">
        <Navbar />
        <Routes />
    </div>
  );
}

export default App;
