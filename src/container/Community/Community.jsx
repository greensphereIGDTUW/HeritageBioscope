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
import { Button } from '@chakra-ui/react';

 
function Community() { 
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [content, setContent] = useState(""); 
  const [postsData, setPostsData] = useState([]); 
  const [newPost, setNewPost] = useState({});  
  const [photo, setPhoto] = useState(null); 

  // const { user } = useAuthContext()
  // console.log("name", user.details.name); 
  // console.log("id", user.detials._id); 


  // const [searchTerm, setSearchTerm] = useState(''); 
  // const [newPostContent, setNewPostContent] = useState(''); 
  // const [username, setUsername] = useState(''); // Added username state

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/posts'); 
        setPostsData(response.data); 
        console.log(postsData); 
      } catch (error) {
        console.log("Error:", error.message); 
      }
    }

  useEffect(() => { 
    // Display existing posts 
    fetchPosts(); 
  }, []); // Run only once on component mount 
  // useEffect(() => {
  //   console.log('Updated Posts Data:', postsData);
  // }, [postsData]);

  const handleLike = (index) => {
    // Handle liking a post
    // For simplicity, let's toggle the like status
    const updatedPosts = [...postsData];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes = updatedPosts[index].liked
      ? updatedPosts[index].likes + 1
      : updatedPosts[index].likes - 1;
    setPostsData(updatedPosts);
  };

  // Handle new post submission 
  // const handlePostSubmit = (event) => {
  //   event.preventDefault();
  //   const username = event.target.username.value;
  //   const content = event.target.content.value;
  //   setPostsData([...postsData, { username, content, liked: false, likes: 0 }]);
  //   event.target.reset();
  // };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    
    setNewPost({
      Title: title,
      Content: content,
      Author: author, 
      Photo: photo
    })

    try {
      const response = await axios.post('http://localhost:5500/api/posts', newPost, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);

      await fetchPosts();

    } catch (error) {
      console.error('Error:', error.message);
    }
    
    e.target.reset();
    console.log('Clicked');
  };

  // // Handle search term change 
  // const handleSearchChange = (event) => { 
  //   setSearchTerm(event.target.value); 
  // }; 

  // // Handle new post content change 
  // const handleNewPostContentChange = (event) => { 
  //   setNewPostContent(event.target.value); 
  // }; 

  return ( 
    <div className="community-container"> 
      <div className="left-content"> 
        {/* <header> 
          <h1>Your Community</h1> 
        </header>  */}
        {/* <section id="search-bar"> 
          <div className="search-container"> 
            <span role="img" aria-label="search-icon"> 
              🔍 
            </span> 
            <input 
              type="text" 
              placeholder="Type to search..." 
              // value={searchTerm} 
              // onChange={handleSearchChange} 
            /> 
          </div> 
        </section>  */}
            <div className="posts-page-heading">
      <h1>Latest Environmental Posts</h1>
      <p>Stay updated with the latest news and articles about the environment.</p>
    </div>

        <div className="centerPosts">
        <section id="new-post" className="new-post-section"> 
          <h2
          style={{
            padding: '10px', 
          }}
          >Create Post</h2> 
          <form onSubmit={handlePostSubmit}> 
            <div className="form-group"> 
            <div className="textarea-container">
              <input 
              type="text" 
              id="username" 
              className="form-control" 
              placeholder="Enter your name..." 
              required 
              onChange={e=>setAuthor(e.target.value)}
              /> 
            </div> 
            </div>
                        <div className="form-group"> 
            <div className="textarea-container">
              <input 
              type="text" 
              id="username" 
              className="form-control" 
              placeholder="Enter the title of the post..." 
              required 
              onChange={e=>setTitle(e.target.value)}
              /> 
            </div> 
            </div>

            <div className="form-group"> 
              <div className="textarea-container"> 
                {/* <FaComment className="icon" />  */}
                <textarea 
                id="content" 
                rows="4" 
                placeholder="  What biotic change have you made for our environment today?" 
                className="form-control-content" 
                required
                onChange={e => setContent(e.target.value)}
                ></textarea> 
              </div> 
            </div> 
            <div classname="funcButton">
              <UploadWidget 
                img={photo}
                setImg={setPhoto}
              />
              <Button 
              colorScheme='teal'
              type='submit'> 
                Submit Post
              </Button>
            </div>
            

            {/* <button 
            type="button" 
            className="btn btn-primary"> 
              <FaImages /> Gallery 
            </button>  */}
            {/* <button type="button" className="btn btn-secondary"> 
              <FaTags /> Tag 
            </button>  */}
            {/* <button type="submit" className="btn btn-success"> 
              <FaUpload /> Publish 
            </button>  */}
            <button type="submit"> </button>
          </form> 
        </section> 
        </div>
        
        <section id="posts"> 
        <SimpleGrid p="10px" mt={10} mb={20} ml={25} mr={25} columns={3} spacing={6} >
        {postsData.map((post, index) => (
            <div key={index} className="post">
              <strong>{post.Title}</strong> 
              <div>~ By {post.Author}</div><br /><br />
              {post.Photo!=null && 
              <div classname='postimg'><img src={post.Photo} alt="Post Image" /><br /><br /></div>
            } 
              {post.Content}<br /><br />
              <hr style={{ border: '0', height: '1px', background: '#444' }} />

              <div className="post-actions">
              <p>Posted {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
                {/* <button
                  onClick={() => handleLike(index)}
                  className={post.liked ? 'liked' : ''}
                  >
                  <span className="heart-box">
                  <span role="img" aria-label="heart">❤️</span>
                  </span>
                  {post.num_likes}
                </button> */}
                {/* <button
                  onClick={() => handleLike(index)}
                  className={post.liked ? 'liked' : ''}
                  >
                  <span className="thumb-box">
                  <span role="img" aria-label="thumbs-up">👍</span>
                  </span>
                  {post.num_likes}
                </button> */}
                {/* <button
                  onClick={() => handleLike(index)}
                  className={post.liked ? 'liked' : ''}
                  >
                  <span className="laugh-box">
                  <span role="img" aria-label="laugh">😂</span>
                  </span>
                  {post.num_likes}
                </button> */}
              </div>
            </div>
          ))}
          </ SimpleGrid>
        </section> 
      </div> 
      

      {/* Right side content - Top Contributors */}
      {/* <div className="right-content"> 
      <div className="content-box">
        <section className="top-contributors-section"> 
          <h2>Top Contributors</h2> 
          </section>
          </div>
          <div className="content-box blank-box"></div>
    
      </div>  */}
    </div> 
  ); 
} 
 
export default Community;
