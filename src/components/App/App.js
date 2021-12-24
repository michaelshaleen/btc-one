import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/landing" exact component={Landing}/>
          {/* <Route path="/edit" exact component={Edit}/>
          <Route path="/profile" exact component={Profile}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
