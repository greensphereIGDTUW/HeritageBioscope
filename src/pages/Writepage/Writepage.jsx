import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Writepage.css';


const Writepage = () => {
  return (
    <div className="writing-page-container">
      <div>
      <Navbar />
    </div>
    <div className="write">
    <img
        className="writeImg"
        src="https://wallpapers.com/images/hd/dark-green-aesthetic-pictures-gzj8gvp0i30wgvjm.jpg"
        alt=""
      />
    <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Add your Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
    
    </div>
    
  )
}

export default Writepage
