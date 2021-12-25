import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User_Profile from '../User_Profile/User_Profile';

function App() {
  return (
    <div className="App">
      <User_Profile />

      <Router>
        <Routes>
          <Route path="/landing" exact component={User_Profile}/>
          {/* <Route path="/edit" exact component={Edit}/>
          <Route path="/profile" exact component={Profile}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
