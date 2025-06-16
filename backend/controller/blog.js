const Blog = require("../model/blog");

const GetAllBlogs = async (req, res) => {
  const blogs = await Blog.find({});

  console.log(blogs);
  res.json(blogs);
};
const GetBlog = async (req, res) => {
  const title = req.body.title;
  console.log(title);
  const blog = await Blog.findOne({ title: title });
  console.log(blog);
  res.json(blog);
};
const CreateBlog = async (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const blog = await Blog.create({
    title: title,
    description: req.body.description,
  });
  console.log(blog);
  res.json(blog);
};

const CreateComment = async (req, res) => {
  const title = req.body.title;
  const comment = req.body.comment;
  await Blog.findOne;
  const blog = await Blog.findOneAndUpdate(
    { title: title },
    { $push: { comments: comment } },
    { new: true }
  );
  console.log(blog);

  res.json(blog);
};

module.exports = { GetAllBlogs, GetBlog, CreateBlog, CreateComment };
