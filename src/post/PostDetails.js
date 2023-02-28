import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../components/features/Button";
import PageNotFound from "../components/features/PageNotFound";
import { fetchPostDetails } from "./postSlice";
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
  return (
    <div className="flex flex-col  w-4/4 items-center">
      {status && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      {!status && post && (
        <main className="mt-10 flex flex-col gap-5">
          <div className="w-3/4 flex mt-5 justify-around items-center">
            <div className="w-2/4 text-3xl">
              <h1>Posts</h1>
            </div>
            <Button img={createIcon} />
          </div>
          <div className="w-3/4">
            <BlockQuote title={"title"} body={post.title} />
            <BlockQuote title={"body"} body={post.body} />
          </div>
        </main>
      )}
      {error === "Request failed with status code 404" ? (
        <PageNotFound error={error} />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostDetails;
