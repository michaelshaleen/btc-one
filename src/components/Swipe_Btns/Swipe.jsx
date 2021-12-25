import React from 'react'
import './Swipe.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Swipe() {
  return (<>
    <button className="yes-btn">
      <ThumbUpIcon />
    </button>
    <button className="no-btn">
    <ThumbDownIcon />
  </button>
 </> )
}

export default Swipe;
