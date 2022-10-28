import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../user/userSlice';

const DisplayUser = ({userId}) => {

    const users=useSelector(getUsers);
    const user= users.find((user)=>user.id==userId);
  return (
    <div>by- {user?user.name:"unknown Author"}</div>
  )
}

export default DisplayUser