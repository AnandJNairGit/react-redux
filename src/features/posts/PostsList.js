import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(getPosts);
  console.log(posts);

  const renderPost = posts.map((post, index) => {
    return (
      <div>
        <h3>{post.title}</h3>
        <h5>{post.content}</h5>
        <hr />
      </div>
    );
  });

  return <div>
    <form></form>
    {renderPost}</div>;
};

export default PostsList;