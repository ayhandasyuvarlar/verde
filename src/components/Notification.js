import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../post/postSlice";
import { selectUser } from "../user/userSlice";

const Notification = () => {
  const post = useSelector((state) => state.posts.posts);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  const handlerClick = () => {
    console.log("handler");
  };

  const userPost = post.filter((item) => item.userId === user.id);
  return (
    <button
      className="  text-start font-semibold whitespace-nowrap text-base"
      onClick={handlerClick}
    >
      <h3>
        Posts
        <span className="shadow  rounded-lg  text-xl text-orange-900 p-1">
          {userPost.length}
        </span>
      </h3>
    </button>
  );
};

export default Notification;
