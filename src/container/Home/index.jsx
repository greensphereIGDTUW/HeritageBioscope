import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';

import { blogList } from '../../constants/data';
import Writeblog from '../../components/Home/Writeblog/Writeblog';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  

  return (
    <div>
      
      <Header />

      
      <Writeblog/>

      
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
