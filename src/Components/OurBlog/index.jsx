import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../Container"
import BlogCard from "../BlogCard"

import { fetchBlogs } from "../../Redux/blogs/blogsReducer";

import './OurBlog.css'

const OurBlog = () => {
    const dispatch = useDispatch()
    const blogsList = useSelector((state) => state.blogs.entities)
    
    const blogs = blogsList?.slice(0,3)
    
    useEffect(()=>{
        dispatch(fetchBlogs())
    },[dispatch])
    return (
        <section className="ourBlog-section">
            <Container>
                <h2 className="ourBlog-title">Our blog</h2>
                <ul className="ourBlog-flex">
                    {blogs.map(({url, title, id})=> {
                        return(
                            <BlogCard 
                                image={url} 
                                title={title} 
                                key={id}
                            />
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}

export default OurBlog