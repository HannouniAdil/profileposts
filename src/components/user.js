import React from 'react';
import UserHoc from '../hoc/userHoc'

const User = (props) => {
  return (
    <div>
      <h1>User - 1</h1>
    </div>
  )
};
const User2 = (props) => {
  return (
    <div>
      <h1>User - 2</h1>
    </div>
  )
}


export default UserHoc(User, User2, 'AdilYo');