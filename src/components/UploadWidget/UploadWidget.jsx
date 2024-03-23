import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'; 
import { ThreeDots } from 'react-loader-spinner';
import './UploadWidget.css'; 
import { Button, WrapItem } from '@chakra-ui/react';
import { FaUpload, FaImages } from 'react-icons/fa';
import { toast, ToastContainer} from 'react-toastify';

const UploadWidget = ({img, setImg}) => {
  // const cloudinaryRef = useRef(); 
  // const widgetRef = useRef(); 
  // useEffect(() => {
  //   cloudinaryRef.current = window.cloudinary; 
  //   console.log(cloudinaryRef.current); 
  //   widgetRef.current = cloudinaryRef.current.createUploadWidget({
  //       cloudName: 'dmg4zjmrp', 
  //       uploadPreset: 'rzefu6yk'
  //   }, function (err, result){
  //       console.log(result); 
  //   })
  // }, [])

  const [loading, setLoading] = useState(false);  


  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset",'rzefu6yk');

    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      let resourceType = 'image';
      let api = `https://api.cloudinary.com/v1_1/dmg4zjmrp/image/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);

      toast.success('Image uploaded successfully!', {
        position: 'top-right',
        autoClose: 3000, // Time in milliseconds, set to 0 to keep the toast open
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });  

      return secure_url;
    } catch (error) {
      console.error(error);

      toast.error('Error uploading image. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      setLoading(true); 

      //upload image file 
      const imgURL = await uploadFile('image'); 
      setImg(imgURL);
      setLoading(false); 

    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className ='ImageUplaod'>
          {/* <div className='FileButton'> */}
            {/* <label htmlFor="img">Image:</label> */}
              {/* <FaImages /> */}

                  <label id="file-input-label" for="img"
                    ><FaImages />   Choose Media         </label
                  >
            <input
              type="file"
              accept="image/*"
              id="img"
              // className="hide_file"
              onChange={(e) => setImg((prev) => e.target.files[0])}
              style={{
                "display" : "none"
              }}
              />
          {/* </div> */}
          <br />
          <div>
            <button
              type='submit'
              className='submit-image-btn'
            ><FaUpload /> Publish Image
            </button>
          {/* <Button 
            colorScheme='teal'
            type='submit'> 
              <FaUpload /> Publish Image
            </Button> */}
          </div>
        </div>
      </form>
      <div className="load">
        {
          loading && <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <button onClick={() => {widgetRef.current.open()}}><i className="writeIcon fas fa-plus"></i></button> */}
    </>
  ); 
}

export default UploadWidget; 