import Hero from '../../Components/Hero'
import Search from '../../Components/Search/indax'
import OurBlog from '../../Components/OurBlog'

const Blog = () => {
    return (<>
        <Hero/>
        <Search/>
        <OurBlog numberBlogs={6} scroll={true} titleCenter={true}/>
    </>
    )
}

export default Blog