import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/home/Home";
import CreatePost from "./post/CreatePost";
import PostDetails from "./post/PostDetails";
import UpdatePost from "./post/UpdatePost";

const App = () => {
  return (
    <>
      <Router>
        <div>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-details/:id" element={<PostDetails/>} />
            <Route path="/update-post/:id" element={<UpdatePost/>} />
            <Route path="/create-new-post" element={<CreatePost />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
