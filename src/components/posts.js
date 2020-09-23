import React from 'react';
import { Link } from 'react-router-dom';


const Posts = (props) =>{
  console.log(props);
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>
    
    routing to Posts/Posts</Link>
    </div>
  )
}

export default Posts;