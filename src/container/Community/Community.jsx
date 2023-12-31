import React, { useState, useEffect } from 'react'; 
import './Community.css'; 
import { FaImages, FaTags, FaUpload , FaComment} from 'react-icons/fa'; 
 
function Community() { 
  const [postsData, setPostsData] = useState([
    { username: 'Trishita', content: 'I alwaya love to explore the eenvironment and capture it in my device to remain it in my memories always.', liked: false, likes: 0 },
    { username: 'Anandita', content: 'Another post here.', liked: false, likes: 0 },
  ]);  

  

  useEffect(() => { 
    // Display existing posts 
    displayPosts(); 
  }, []);  
  function displayPosts() {
    return postsData.map((post, index) => (
      <div key={index} className="post">
        <strong>{post.username}</strong> <br></br><br></br>
        {post.content}<br></br><br></br>
        <hr style={{ border: '0', height: '1px', background: '#444' }} />

        <div className="post-actions">
          <button
            onClick={() => handleLike(index)}
            className={post.liked ? 'liked' : ''}
          >
            <span className="heart-box">
            <span role="img" aria-label="heart">❤️</span>
          </span>
          {post.likes}
          </button>
          <button
          onClick={() => handleLike(index)}
          className={post.liked ? 'liked' : ''}
        >
          <span className="thumb-box">
            <span role="img" aria-label="thumbs-up">👍</span>
          </span>
          {post.likes}
        </button>
        <button
          onClick={() => handleLike(index)}
          className={post.liked ? 'liked' : ''}
        >
          <span className="laugh-box">
            <span role="img" aria-label="laugh">😂</span>
          </span>
          {post.likes}
        </button>
        </div>
      </div>
    ));
  }

  const handleLike = (index) => {
    
    const updatedPosts = [...postsData];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes = updatedPosts[index].liked
      ? updatedPosts[index].likes + 1
      : updatedPosts[index].likes - 1;
    setPostsData(updatedPosts);
  };

  // Handle new post submission 
  const handlePostSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const content = event.target.content.value;
    setPostsData([...postsData, { username, content, liked: false, likes: 0 }]);
    event.target.reset();
  };

 
  return ( 
    <div className="community-container"> 
      <div className="left-content"> 
        
        <section id="new-post" className="new-post-section"> 
          <h2>Create Post</h2> 
          <form onSubmit={handlePostSubmit}> 
            <div className="form-group"> 
            <div className="textarea-container">
              <input type="text" id="username" className="form-control" placeholder="     Enter your name..." required /> 
            </div> 
            </div>
            <div className="form-group"> 
              <div className="textarea-container"> 
                {/* <FaComment className="icon" />  */}
                <textarea id="content" rows="4" placeholder="  What biotic change have you made for our environment today?" className="form-control-content" required></textarea> 
              </div> 
            </div> 
            <button type="button" className="btn btn-primary"> 
              <FaImages /> Gallery 
            </button> 
            <button type="button" className="btn btn-secondary"> 
              <FaTags /> Tag 
            </button> 
            <button type="submit" className="btn btn-success"> 
              <FaUpload /> Publish 
            </button> 
          </form> 
        </section> 
        <section id="posts"> 
          {displayPosts()} 
        </section> 
      </div> 

      {/* Right side content - Top Contributors */}
      <div className="right-content"> 
      <div className="content-box">
        <section className="top-contributors-section"> 
          <h2>Top Contributors</h2> 
          </section>
          </div>
          <div className="content-box blank-box"></div>
    
      </div> 
    </div> 
  ); 
} 
 
export default Community;
