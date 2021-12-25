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
    <span onClick={handleNav}>
      <KeyboardDoubleArrowDownIcon className={nav ?  "arrow-up" : "arrow-down"} />
    </span>
    BTC Buds
    <span>
      <Button className="MuiButton-sizeLarge">
        Edit
      </Button>
    </span>
  </nav>
  </>)
}

export default User_Profile;
