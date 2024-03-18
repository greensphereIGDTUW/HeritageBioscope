import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Heading, Container, Text, SimpleGrid, Box, GridItem, Image ,VisuallyHidden, Divider, Center  } from '@chakra-ui/react';
// import { blogList } from '../../constants/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

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

    // <Container>
      
    //   <Container>
    //   <Text>
    //   <Link className='blog-goBack' to='/Blog'>
    //     <span> &#8592;</span> <span>Go Back</span>
    //   </Link>
    //   </Text>

    //   </Container>

    //   <Container >
    //   <Box marginLeft='-15rem' marginRight= '5rem'  borderWidth='1px' overflow='hidden' height = '900px' width= '900px' boxShadow='2xl' p='6' rounded='md' bg='white'>
    //   blog ? (
    //     <Text>
        
    //     Published {blog.createdAt}
    //     </Text>

    //     <Text>
    //     {blog.Title}
    //     </Text>

    //     <Image src={blog.cover} alt='cover' >
    //     </Image>
    //     <Text>
    //     {blog.Content}
    //     </Text>
    //     ) : (
    //     <EmptyList />
    //   )
    //   </Box>
    //   </Container>
      
      
    // </Container>

    
//      <div className="blogdetail-heading-navbar">
//         <Navbar />
//       <Link className='blog-goBack' to='/Blog'>
//         <span> &#8592;</span> <span>Go Back</span>
//       </Link>
//       blog ? (

//         <div className='blog-wrap'>
          
//           <header>
//             <p className='blog-date'>Published {blog.createdAt}</p>
//             <h2>{blog.Title}</h2>
//             {/* <div className='blog-subCategory'>
//               {blog.subCategory.map((category, i) => (
//                 <div key={i}> }
//                   { <Chip label={category} /> }
//                   </div>
//               ))
//               </div>  */}
//           </header>
//           {<img src={blog.cover} alt='cover' /> }
//           <p className='blog-desc'>{blog.Content}</p>
//         </div>
        
//       ) : (
//         <EmptyList />
//       )
//       </div> 
    

//   );
// };

// export default Blog;

<>
<div className="blogdetail-heading-navbar">
    <Navbar />
  <Link className='blog-goBack' to='/Blog'>
    <span> &#8592;</span> <span>Go Back</span>
  </Link>
  {blog ? (

    <div className='blog-wrap'>
      
      <header>
      <h1 className='blogTitle'>{blog.Title}</h1>
      <h3>By - {blog.Author}</h3>
      <p>Posted {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
      <Center><hr /></Center>
        {/* <div className='blog-subCategory'>
          {blog.subCategory.map((category, i) => (
            <div key={i}> */}
              {/* <Chip label={category} /> */}
            {/* </div>
          ))}
        </div> */}
      </header>
      <div className="desc">
        {
          blog.Photo &&  <img src={blog.Photo} alt='cover' /> 
        }
      <p className='blog-desc'>{blog.Content}</p>
      </div>

    </div>
    
  ) : (
    <EmptyList />
  )}
  </div>
</>

);
};

export default Blog;