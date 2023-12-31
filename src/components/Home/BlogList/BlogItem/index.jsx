import React from 'react';
import { Link } from 'react-router-dom';

import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    Content,
    Title,
    createdAt,
    _id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      {/* <img className='blogItem-cover' src={cover} alt='cover' /> */}
      {/* <Chip label={category} /> */}
      <h3>{Title}</h3>
      <p className='blogItem-desc'>{Content}</p>
      <footer>
        <div className='blogItem-author'>
          {/* <img src={authorAvatar} alt='avatar' /> */}
          <div>
            {/* <h6>{authorName}</h6> */}
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/Blogdetailpage/${_id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
