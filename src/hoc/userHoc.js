import React from 'react';

const UserHoc = (WrappedComponent, WrappedComponent2, arg)=>{
    return(props)=> (
      <div>
        <h1>{arg}</h1>
        <WrappedComponent {...props} />
        <WrappedComponent2 {...props} />
      </div>
    )
  }

export default UserHoc;