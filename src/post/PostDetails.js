import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../components/features/Button";
import PageNotFound from "../components/features/PageNotFound";
import { deletePost, fetchPostDetails } from "./postSlice";
import createIcon from "../assets/create.svg";
import BlockQuote from "../components/features/BlockQuote";
const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.details);
  const error = useSelector((state) => state.posts.error);
  const status = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);
  const handlerClick = (id) => {
    dispatch(deletePost(post))
  };
  return (
    <div className="flex flex-col  w-4/4 items-center">
      {status && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      {!status && post && !error && (
        <main className="mt-10 flex flex-col gap-5">
          <div className="w-3/4 flex mt-5 justify-around items-center">
            <div className="w-2/4 text-3xl">
              <h1>Posts</h1>
            </div>
            <Button img={createIcon} /> {/* new post */}
          </div>
          {/* blog details */}
          <div className="w-3/4">
            <BlockQuote title={"title"} body={post.title} />
            <BlockQuote title={"body"} body={post.body} />
          </div>
          <div className="flex flex-row justify-end items-center gap-10 mt-5 w-3/4">
            <button
              onClick={() => {
                handlerClick(post.id);
              }}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to={`/update-post/${id}`}
            >
              Update Post
            </Link>
          </div>
        </main>
      )}
      {error && <PageNotFound error={error} />}
    </div>
  );
};

export default PostDetails;
