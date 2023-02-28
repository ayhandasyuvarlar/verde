import React from "react";
import { Link } from "react-router-dom";
const PostsExcerpt = ({ title, body, id }) => {
  return (
    <Link to={`/post-details/${id}`}>
      <div className="flex flex-col align-center justify-start gap-5 max-w-sm p-6  rounded-lg   h-90 min-h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
      </div>
    </Link>
  );
};

export default PostsExcerpt;
