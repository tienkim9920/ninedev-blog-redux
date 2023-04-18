import React, { useState, useCallback } from "react";
import Blogs from "./Blogs";
import Counter from "./Counter";

export default function App() {
  const [blogs, setBlogs] = useState(['Articles']);

  const addBlog = useCallback(() => {
    setBlogs((blogs) => [...blogs, "New Blog"]);
  }, []);

  return (
    <>
      <Blogs blogs={blogs} addBlog={addBlog} />
      <Counter />
    </>
  );
}
