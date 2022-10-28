import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../user/userSlice";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();

  const users = useSelector(getUsers);
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        userId: userRef.current.value,
      })
    );
  };

  const UserOptions = () => {
    console.log(users);
    return users.map((user, index) => (
      <option key={index} value={user.id}>
        {user.name}
      </option>
    ));
  };

  return (
    <form style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <div>
        <label>post Title:</label>
        <input ref={titleRef} type="text" />
      </div>

      <select ref={userRef}>
        <UserOptions />
      </select>

      <div>
        <label>post Content:</label>
        <textarea ref={contentRef} type="text" />
      </div>
      <button onClick={handlePost}>Post</button>
    </form>
  );
};

export default AddPostForm;
