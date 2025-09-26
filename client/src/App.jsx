import React from 'react';
import SideBar from "./components/sidebar/sidebar.jsx"
import Navbar from './components/navbar/navbar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideBar/>
        <Navbar/>
      </div>
    
    </div>
  );
}

export default App;
