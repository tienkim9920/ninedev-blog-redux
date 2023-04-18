import React from "react";

const Blogs = ({ blogs, addBlog }) => {
  console.log("child render");
  return (
    <>
      <h2>My Blogs</h2>
      {blogs.map((blog, index) => {
        return <p key={index}>{blog}</p>;
      })}
      <button onClick={addBlog}>Add Blog</button>
    </>
  );
};

export default Blogs;
