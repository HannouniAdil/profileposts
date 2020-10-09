import React from 'react';

const Auth = (props) => {
  const pw = '123456'

  if(pw!== '123456'){
    return <div>User is not authorized</div>
  }
  else{
    return props.children
  }
}

export default Auth;