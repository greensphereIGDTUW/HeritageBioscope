import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import './Writepage.css';
import axios from 'axios'; 
import { Button, WrapItem } from '@chakra-ui/react';


const Writepage = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState(""); 
  const [data, setData] = useState({}); 
  // const { user } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setData({
      Title: title,
      Content: content,
      Photo: img, 
      Author: '659181c3b22240b48892279c'
    })

    try {
      const response = await axios.post('https://heritagebioscope.onrender.com/api/blog', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  
    console.log('Clicked');
  };


  return (
    <div className="writing-page-container">
      <div>
      <Navbar />
    </div>
    <div className="write">
    <img
        className="writeImg"
        src={img===""?'https://wallpapers.com/images/hd/dark-green-aesthetic-pictures-gzj8gvp0i30wgvjm.jpg':img}
        alt=""
      />
      <UploadWidget 
      img={img}
      setImg={setImg}
      ></UploadWidget>
    <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* <label htmlFor="imageInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type = "file" id = "imageInput" type="file" style={{ display: "none" }} /> */}
          <input
            className="writeInput"
            placeholder="Add your Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <WrapItem>
            <Button 
            colorScheme='teal'
            type='submit'
            >
              Publish</Button>
        </WrapItem>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {/* <button className="writeSubmit" type="submit">
          Publish
        </button> */}
      </form>
    </div>
    
    </div>
    
  )
}

export default Writepage
