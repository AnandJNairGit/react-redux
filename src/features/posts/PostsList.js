import React from "react";
import { useSelector } from "react-redux";
import DisplayUser from "./DisplayUser";
import { getPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(getPosts);


  const renderPost = posts.map((post, index) => {
    return (
      <div key={index}>
        <h3>{post.title}</h3>
        <h5>{post.content}</h5>
        <DisplayUser userId={post.userId} />
        <hr />
      </div>
    );
  });

  return <div>{renderPost}</div>;
};

export default PostsList;
