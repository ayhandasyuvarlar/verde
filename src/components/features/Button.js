import React from "react";
import { Link } from "react-router-dom";

const Button = ({ img }) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded text-1xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <img src={img} alt="" width={"17px"} />
      <Link
        to={"/create-new-post"}
        type="button"
        className="text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium "
      >
        New Post
      </Link>
    </div>
  );
};

export default Button;
