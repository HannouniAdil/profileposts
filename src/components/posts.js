import React from 'react';
import { Link } from 'react-router-dom';


const Posts = (props) =>{
  console.log(props);

  const ids = [
    {id:'1', name: 'Post - 1'},
    {id:'2', name: 'Post - 2'},
    {id:'3', name: 'Post - 3'}
  ]

  return ids.map(item => {
    return(
      <span key={item.id}>
        <br/><Link to={item.id} >{item.name}</Link>
      </span>    
    )
  })

}

export default Posts;