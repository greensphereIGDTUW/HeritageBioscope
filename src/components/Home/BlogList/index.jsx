import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import axios from 'axios'; 

const BlogList = ({ blogs }) => {
  const [blogsData, setBlogsData] = useState([]); 
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://heritagebioscope.onrender.com/api/blog'); 
      setBlogsData(response.data); 
      console.log(blogsData); 
    } catch (error) {
      console.log("Error:", error.message); 
    }
  }

  useEffect(() => { 
    // Display existing posts 
    fetchBlogs(); 
  }, []); // Run only once on component mount 

  return (
    <div className='blogList-wrap'>
      {blogsData.map((blog, index) => (
        <BlogItem key = {index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
