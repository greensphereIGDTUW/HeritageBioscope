import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Writeblog.css';

const Writeblog = () => {
  // const navigate = useNavigate();
  // const navigateWrite = () => {
  //   navigate('/write')
  // }
  return (
    <div className="writeblog-container">
      <div class="center">
      <Link to= "/write">
      <button className='bttn'><Link to= "/write">Write new blog</Link></button>
      </Link>
      </div>
      
    </div>
  )
}

export default Writeblog

