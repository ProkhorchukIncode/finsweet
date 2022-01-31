import Hero from '../../Components/Hero'
import OurBlog from '../../Components/OurBlog'

const Blog = () => {
    return (<>
        <Hero/>
        <OurBlog numberBlogs={6} scroll={true} titleCenter={true}/>
    </>
    )
}

export default Blog