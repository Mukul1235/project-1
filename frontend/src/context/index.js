import { createContext, useState } from "react";

const BlogContext = createContext();

function BlogProvider(props) {
    const [title,setTitle]=useState([])
    return ( 
      <BlogContext.Provider value={{title,setTitle}}>
        {props.children}
      </BlogContext.Provider>
    );
}
