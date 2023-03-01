import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "../components/features/PageNotFound";

import UpdatePostForm from "../components/features/UpdatePostForm";
import { fetchPostDetails } from "./postSlice";

const UpdatePost = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.details);
  const error = useSelector((state) => state.posts.error);
  const status = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      {status && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      {!status && post && !error && <UpdatePostForm {...post} id={id} />}
      {error && <PageNotFound error={error} />}
    </div>
  );
};

export default UpdatePost;
