import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../user/userSlice";
import Notification from "../Notification";
import arrowRightIcon from "../../assets/right.svg";
const UserExcerpt = () => {
  const user = useSelector(selectUser);
  return (
    <div className="top-0 right-0 w-[20vw] dark:bg-gray-900 p-10 pl-20 text-white fixed h-full ">
      <aside className="flex flex-col items-start justify-start gap-5">
        <div className="flex items-center gap-2">
          <img
            src={user.img_url}
            alt=""
            width={"45px"}
            className={"rounded-full"}
          />
          <div className="flex-1 text-xl">{user.name}</div>
        </div>
        <Notification />
        <div className=" flex items-center justify-start gap-1">
          <img src={arrowRightIcon} alt="arrow" width={"25px"} />
          <Link to={"/create-new-post"} className={"text-xl"}>
            New Post
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default UserExcerpt;
