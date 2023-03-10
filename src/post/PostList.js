import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import PostsExcerpt from "./PostExcerpt";
import { fetchPost } from "./postSlice";
const PostList = () => {
  const post = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userPost = post.filter((item) => item.userId === user.id);
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <div className=" rounded-lg shadow light:bg-gray-800 dark:border-gray-700 h-90 min-h-full bg-white  p-1 mt-10">
      {status && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}

      <div className="flex flex-wrap gap-5 mt-10  justify-center">
        {!status &&
          userPost.map((item) => <PostsExcerpt key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default PostList;
