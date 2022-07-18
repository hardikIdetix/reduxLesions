import React from "react";
import "./assets/css/App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />}></Route>
        <Route path="post">
          <Route index element={<AddPostForm />}></Route>
          <Route path=":postId" element={<SinglePostPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
export default App;