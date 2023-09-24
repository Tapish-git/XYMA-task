//App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useState } from "react";


function App() {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
      setToggle(!toggle)
    }
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        {toggle && <div className="col-2 bg-kk vh-100">
          <Sidebar />
        </div>}
        <div className="col bg-light">
          <Home Toggle={Toggle}/>
        </div>
      </div>
    </div>
  );
}

export default App;
