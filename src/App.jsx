import React from 'react'
import Routing from './Routing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivecyPolicy from "./component/privecypolicy";

function App() {
  return (
    <div>
       <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<PrivecyPolicy />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;