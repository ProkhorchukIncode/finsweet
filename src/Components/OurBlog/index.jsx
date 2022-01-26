import Container from "../Container"
import BlogCard from "../BlogCard"

import blogs from "./blogs"

import './OurBlog.css'

const OurBlog = () => {
    return (
        <section className="ourBlog-section">
            <Container>
                <h2 className="ourBlog-title">Our blog</h2>
                <ul className="ourBlog-flex">
                    {blogs.map(({image, date, title, text, path})=> {
                        return(
                            <BlogCard 
                                image={image} 
                                date={date} 
                                title={title} 
                                text={text}
                                path={path}
                                key={image}
                            />
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}

export default OurBlog