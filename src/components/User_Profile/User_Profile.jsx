import './User_Profile.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from '@material-ui/core/Button';
import Nav from '../Nav/Nav';
import Swipe from '../Swipe_Btns/Swipe';

function User_Profile() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  return (<>
      <Nav />
      <div className="profile-swipe">
        <Swipe />
      </div>
  </>)
}

export default User_Profile;
