import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { blogList } from '../../constants/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import axios from 'axios';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlogsId = async () => {
    try {
      const response = await axios.get(`https://heritagebioscope.onrender.com/api/blog/${id}`); 
      setBlog(response.data); 
      console.log(Blog.Title); 
    } catch (error) {
      console.log("Error:", error.message); 
    }
  }

  useEffect(() => {
    fetchBlogsId(); 
  }, []);


  return (
    <>
    <div className="blogdetail-heading-navbar">
        <Navbar />
      <Link className='blog-goBack' to='/Blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (

        <div className='blog-wrap'>
          
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.Title}</h1>
            {/* <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}> */}
                  {/* <Chip label={category} /> */}
                {/* </div>
              ))}
            </div> */}
          </header>
          {/* <img src={blog.cover} alt='cover' /> */}
          <p className='blog-desc'>{blog.Content}</p>
        </div>
        
      ) : (
        <EmptyList />
      )}
      </div>
    </>
  );
};

export default Blog;
