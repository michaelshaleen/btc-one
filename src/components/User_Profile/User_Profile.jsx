import './User_Profile.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from '@material-ui/core/Button';


function User_Profile() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);
  console.log(nav, "nav here");



  return (<>
  <nav className={nav ? "main-nav" : "main-nav-long"}>
    <span className="arrow-down" onClick={handleNav}>
      <KeyboardDoubleArrowDownIcon className={nav ?  "arrow-up" : "arrow-down"} />
      {/* <i className={nav ? "fa fa-arrow-circle-up" : "fa fa-arrow-circle-o-down"} aria-hidden="true"></i> */}

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
