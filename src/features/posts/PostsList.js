import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayUser from "./DisplayUser";
import { fetchPosts, getPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(getPosts);
  const dispatch=useDispatch();
  useEffect(() => {
    console.log("DFSgfghdrhdfhd");
    dispatch(fetchPosts());
  }, []);

  const renderPost = posts.map((post, index) => {
    return (
      <div key={index}>
        <h3>{post.title}</h3>
        <h5>{post.body}</h5>
        <DisplayUser userId={post.userId} />
        <hr />
      </div>
    );
  });

  return <div>{renderPost}</div>;
};

export default PostsList;
