import React, { useState, useEffect } from 'react';
import { Heading, Container, Text, SimpleGrid, Box, GridItem, Image ,VisuallyHidden, VisuallyHiddenInput  } from '@chakra-ui/react';
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
    <SimpleGrid p="10px" mt={10} mb={20} ml={25} mr={25} columns={3} spacing={6} >
      
      {blogsData.map((blog, index) => (
            <BlogItem key = {index} blog={blog} />
          ))}

      
      
      
      {/* <Container paddingTop={20} mt={5}>
      {blogsData.map((blog, index) => (
            <BlogItem key = {index} blog={blog} />
          ))}
      </Container> */}
    </SimpleGrid>
    
    // <div className='blogList-wrap'>
    //   {blogsData.map((blog, index) => (
    //     <BlogItem key = {index} blog={blog} />
    //   ))}
    // </div>
  );  
};

export default BlogList;
