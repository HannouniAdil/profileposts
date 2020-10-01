import React from 'react';
import { Link } from 'react-router-dom';

const Profiles = (props) => {
  const redirectUrl = () => {
    props.history.push('/')
  }
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>
    
    routing to Profiles/Posts2</Link>
    {redirectUrl()}
    </div>
  )
}

export default Profiles;