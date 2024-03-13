import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleToBookMark,handleReadMark}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-1/2">
            <h1 className="text-2xl text-blue-800 mt-6">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleToBookMark={handleToBookMark}
                    handleReadMark={handleReadMark}

                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleToBookMark:PropTypes.func

}
export default Blogs;