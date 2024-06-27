import logo from './logo.svg';
import './App.css';   
import Login from './Components/Login';
import Product from './Components/Product';
import React, { useState } from 'react';
function App() {
  const[page, setpage] = useState(1)
    return (
    <div className="App">
      {page==0?<Login setpage={setpage}/>:<Product setpage={setpage}/>}
    </div>
  );
}

export default App;
