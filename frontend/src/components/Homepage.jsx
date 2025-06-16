import React, { useEffect, useState } from "react";
import { createBlog, getBlogs } from "../api/Blogs";
import { NavLink, useNavigate } from "react-router-dom";
function Homepage() {
  const [blogs, setBlogs] = useState([]);

  const handleCreateBlog = async () => {
    const data = {
      title: "Blog9",
      description: "Description of blog 9",
    };
    const response = await createBlog(data);
    const temp_blog = [...blogs, response];
    setBlogs(temp_blog);
  };
  const navigate=useNavigate()
  useEffect(() => {
    getBlogs().then((blog) => {
      setBlogs(blog);
    });
  }, []);
  return (
    <div>
      <div className="blog">
        {blogs.map((blog) => (
          <div>
            <ul className="blog_component">
              <li>{blog.title}</li>
              <li>{blog.description}</li>
              <button type="button" onClick={()=>{navigate("/create-comment",{replace:true})}}>add comment</button>
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          handleCreateBlog();
        }}>
        Create new Blog
      </button>
      <NavLink
        className="post-titles"
        style={{ display: "block" }}
        to={`/post/`}>
        HEMO
      </NavLink>
    </div>
  );
}

export default Homepage;
