const { GetAllBlogs, CreateBlog, GetBlog, CreateComment } = require("../controller/blog")

const router = require("express").Router()


router.get("/",GetAllBlogs)
router.get("/:title", GetBlog);
router.post("/", CreateBlog);
router.post("/comment", CreateComment);

module.exports = router;