import React from 'react';
import { Heading, Container, Text, Grid, Box, Image , Stack, Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    Content,
    Title,
    createdAt,
    _id,
    cover,
    authorAvatar,

  },
}) => {
  return (
    
    
    <Container as="section" paddingTop={10} maxWidth="4xl" py="20px">

      <Box display='block' overflowY='hidden' bg="white" height="400px" width="380px" mt={95} mb={-12} boxShadow='dark-lg' p='6' rounded='md' >
        <Container paddingleft={5} paddingright={5}>
        <Text paddingleft={3} paddingright={3}>
        {createdAt}
        </Text>
      <Image src={cover} alt='cover' paddingTop={3} paddingleft={3} paddingright={3} paddingBottom={5}></Image>
    
      
      <Heading as='h4' size='md' paddingleft={3} paddingright={3} paddingBottom={3}>{Title}</Heading>

      <Text paddingleft={3} paddingright={3} paddingbottom= {5}>  
      {Content}
      </Text>
        
        

        {/* <Image paddingleft={3} paddingright={3}  src={authorAvatar} alt='avatar'  ></Image> */}
        
        </Container>
        
        </Box>
        <Stack direction='row' spacing={4} align='center'>
        <Button size='md'
        paddingleft = {2}
        paddingright={2}
        display='flex'
        alignItems='center'
        justifyContent='center'
        bgPosition='center'
        bgRepeat='no-repeat'
        height='48px'
  
  width='395px'
  border='2px'
  borderColor='green.500' colorScheme='teal' variant='solid'>
        <Text paddingleft={3} paddingright={3} paddingbottom={2}>
        <Link className='blogItem-link' to={`/Blogdetailpage/${_id}`}>
        Read more...
        </Link>
        
        </Text>
        </Button>
        
        </Stack>


        </Container>
        
      
   
    
    
    
    
/* 
 
        // <div className='blogItem-wrap'>
    //   {/* <img className='blogItem-cover' src={cover} alt='cover' /> */
    /* //   {/* <Chip label={category} /> */
    //   <h3>{Title}</h3>
    //   <p className='blogItem-desc'>{Content}</p>
    //   <footer>
    //     <div className='blogItem-author'>
    //       {/* <img src={authorAvatar} alt='avatar' /> */}
    //       <div>
    //         {/* <h6>{authorName}</h6> */}
    //         <p>{createdAt}</p>
    //       </div>
    //     </div>
    //     <Link className='blogItem-link' to={`/Blogdetailpage/${_id}`}>
    //       <p>Read more...</p>
    //     </Link>
    //   </footer> */}
    /* // </div> */

  );
};

export default BlogItem;
