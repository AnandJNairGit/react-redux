import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
      })
    );
  };

  return (
    <form style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <div>
        <label>post Title:</label>
        <input ref={titleRef} type="text" />
      </div>
      <div>
        <label>post Content:</label>
        <textarea ref={contentRef} type="text" />
      </div>
      <button onClick={handlePost}>Post</button>
    </form>
  );
};

export default AddPostForm;
