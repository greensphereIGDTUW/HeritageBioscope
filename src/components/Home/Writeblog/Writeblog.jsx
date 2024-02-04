import React from 'react'
import { Link } from "react-router-dom";
import './Writeblog.css';

const Writeblog = () => {
  return (
    <div className="writeblog-container">
      <div class="center">
      {/* <Link to= "/write"> */}
      <button className='bttn'><Link to= "/write">Write new blog</Link></button>
      {/* </Link> */}
      </div>
      
    </div>
  )
}

export default Writeblog

