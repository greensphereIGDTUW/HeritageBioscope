import React, { useState, useEffect } from 'react'; 
import './Community.css'; 
import { FaImages, FaTags, FaUpload , FaComment} from 'react-icons/fa';
import axios from 'axios';  
// import { useAuthContext } from '../../hooks/useAuthContext';
// import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import { SimpleGrid } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { Button, Box, Input, Textarea, Flex } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 
function Community() { 
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [content, setContent] = useState(""); 
  const [postsData, setPostsData] = useState([]); 
  const [newPost, setNewPost] = useState({});  
  const [photo, setPhoto] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://heritagebioscope.onrender.com/api/posts');
      setPostsData(response.data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    
    setNewPost({
      Title: title,
      Content: content,
      Author: author, 
      Photo: photo
    })

    try {
      const response = await axios.post('https://heritagebioscope.onrender.com/api/posts', newPost, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);
  
      toast.success('Post uploaded successfully!', {
        position: 'top-right',
        autoClose: 3000, // Time in milliseconds, set to 0 to keep the toast open
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });  
      await fetchPosts();

      setAuthor("");
      setTitle("");
      setContent("");
      setPhoto(null);


    } catch (error) {
      console.error('Error:', error.message);

      toast.error('Error uploading post. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    
    console.log('Clicked');
  };

  return (
    <div className="app-container">
      <h1 className="heading">Latest Posts on Heritage</h1>

      <Box className="create-post-box">
        <h2>Create Post</h2>
        <Input
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style = {{
            margin: '5px',
            borderRadius:'20px'
          }}
        />
        <Input
          placeholder="Title of Post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style = {{
            margin: '5px',
            borderRadius:'20px'
          }}
        />
        <Textarea
          placeholder="What biotic change have you made for our environment today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style = {{
            margin: '5px',
            borderRadius:'20px'
          }}
        />
        <UploadWidget
        img={photo}
        setImg={setPhoto}
        ></UploadWidget>
        <Button colorScheme="teal" onClick={handlePostSubmit}>
          Submit Post
        </Button>
      </Box>

      <Flex 
      direction={'column-reverse'}
      gap={5}
      alignItems={'center'}
      >
      {postsData.map((post, index) => (
          <Box key={index} className="post">
              <div key={index} className="post">
                <strong>{post.Title}</strong> 
              <div>~ By {post.Author}</div><br /><br />
              {post.Photo!=null && 
              <div classname='postimg'><img src={post.Photo} alt="Post Image" /><br /><br /></div>
            } 
              {post.Content}<br /><br />
              <hr style={{ border: '0', height: '1px', background: '#444' }} />

            </div>
          </Box>
        ))}

      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} className="posts-grid">
      </SimpleGrid>

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
    </div>
  ); 
} 
 
export default Community;
