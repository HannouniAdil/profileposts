import React from 'react';
import { Link } from 'react-router-dom';

const Profiles = (props) => {
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>
    
    routing to Profiles/Posts</Link>
    </div>
  )
}

export default Profiles;