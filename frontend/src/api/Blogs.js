export const getBlogs = async() => {
    const response = await fetch("http://localhost:8000/", {
      method: "GET",
    });
    return response.json();
}
export const createBlog = async(data) => {
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  console.log(response)
    return response.json();
}

