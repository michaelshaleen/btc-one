import './User_Profile.css';
import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@material-ui/core/Button';


function User_Profile() {
  return (<>
  <nav className="main-nav">
    <span className="arrow-down">
      <KeyboardDoubleArrowDownIcon />
    </span>
    BTC Buds
    <span>
      <Button className="MuiButton-sizeLarge">
        Edit
      </Button>
    </span>
  </nav>
  {/* <Link to="/" className="nav-links" >
              Coach
            </Link> */}
      
    
  </>)
}

export default User_Profile;
