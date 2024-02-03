import React from 'react';
import { Heading, Container, Text, Grid, Box, Image , Stack, Button, ButtonGroup, Flex, Spacer} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import Chip from '../../../common/Chip';
import './styles.css';
import { formatDistanceToNow } from 'date-fns';

const BlogItem = ({
  blog: {
    Content,
    Title,
    createdAt,
    _id,
    Photo,
    Author,

  },
}) => {
  return (
    
    
  //   <Container as="section" paddingTop={10} maxWidth="4xl" py="20px">

  //     <Box display='block' overflowY='hidden' bg="white" height="400px" width="380px" mt={95} mb={-12} boxShadow='dark-lg' p='6' rounded='md' >
  //       <Container paddingleft={5} paddingright={5}>
  //       <Text paddingleft={3} paddingright={3}>
  //       {createdAt}
  //       </Text>
  //     <Image src={Photo} alt='Photo' paddingTop={3} paddingleft={3} paddingright={3} paddingBottom={5}></Image>
    
      
  //     <Heading as='h4' size='md' paddingleft={3} paddingright={3} paddingBottom={3}>{Title}</Heading>

  //     <Text paddingleft={3} paddingright={3} paddingbottom= {5}>  
  //     {Content}
  //     </Text>
        
        

  //       {/* <Image paddingleft={3} paddingright={3}  src={authorAvatar} alt='avatar'  ></Image> */}
        
  //       </Container>
        
  //       </Box>
  //       <Stack direction='row' spacing={4} align='center'>
  //       <Button size='md'
  //       paddingleft = {2}
  //       paddingright={2}
  //       display='flex'
  //       alignItems='center'
  //       justifyContent='center'
  //       bgPosition='center'
  //       bgRepeat='no-repeat'
  //       height='48px'
  
  // width='395px'
  // border='2px'
  // borderColor='green.500' colorScheme='teal' variant='solid'>
  //       <Text paddingleft={3} paddingright={3} paddingbottom={2}>
  //       <Link className='blogItem-link' to={`/Blogdetailpage/${_id}`}>
  //       Read more...
  //       </Link>
        
  //       </Text>
  //       </Button>
        
  //       </Stack>


  //       </Container>
        
  
  <Container
  as="section"
  paddingTop={10}
  maxW="500px"
  py="20px"
  textAlign="center"
  >
  <Flex>


  {/* <Stack direction="column" spacing={4} align="center"> */}
  <Box
    overflowY="hidden"
    bg="white"
    height="450px"
    width="380px"
    mt={95}
    mb={-12}
    boxShadow="dark-lg"
    p="6"
    rounded="md"
    display="flex"
    flexDirection="column"
    >
    <Container paddingX={5}>
      <Heading as="h4" size="md" paddingBottom={3}>
        {Title}
      </Heading>
      <Text fontSize="sm" color="gray.500" paddingBottom={3}>
        Posted by {Author} {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </Text>
      {
        Photo &&  <Image src={Photo} alt="Photo" paddingBottom={3} height='200px' width='360px'></Image>
      }
      {/* <Text fontSize="md" paddingBottom={3} maxHeight="5em" overflow="hidden">
        {Content}
      </Text> */}
    </Container>
    <Spacer />
    <Button
      size="md"
      height="48px"
      width="100%" 
      border="2px"
      borderColor="green.500"
      colorScheme="teal"
      variant="solid"
      >
      <Text>
        <Link className="blogItem-link" to={`/Blogdetailpage/${_id}`}>
          Read more...
        </Link>
      </Text>
    </Button>
  </Box>
  </Flex>
    
</Container>


    
    
    
/* 
 
        // <div className='blogItem-wrap'>
    //   {/* <img className='blogItem-Photo' src={Photo} alt='Photo' /> */
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
