import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import status from "../../status";
import { fetchUsers } from "../user/userSlice";
import DisplayUser from "./DisplayUser";
import { fetchPosts, getPosts, getStatus } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(getPosts);
  const postStatus = useSelector(getStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("DFSgfghdrhdfhd");
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);

  const renderPost = posts.map((post, index) => {
    return postStatus === status.LOADING ? (
      <h3>LOADING..</h3>
    ) : (
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
