import React, { useEffect, useState } from "react";
import { createBlog, getBlogs } from "../api/Blogs";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(title);
      console.log(description);
      const data={"title":title,"description":description}
      createBlog(data).then((response) => {
          console.log(response)
      });
    navigate("/", { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateBlog;
