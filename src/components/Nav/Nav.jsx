import './Nav.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


function Nav() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  return (<>
    <nav className={nav ? "main-nav" : "main-nav-long"}>
        <span onClick={handleNav}>
          <KeyboardDoubleArrowDownIcon className={nav ?  "arrow-down" : "arrow-up"} />
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

export default Nav;
