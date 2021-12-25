import './User_Profile.css';
import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function User_Profile() {
  return (<>
  <nav className="main-nav">
    <span className="arrow-down">
      <KeyboardDoubleArrowDownIcon />
    </span>
    BTC Buds
    <span>
      <button className="MuiButton-sizeLarge">
        Edit
      </button>
    </span>
  </nav>
  {/* <Link to="/" className="nav-links" >
              Coach
            </Link> */}
      
    
  </>)
}

export default User_Profile;
