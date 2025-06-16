const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  comments:[ {
    type: String,
    require: false,
  }],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", require: false }],
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
