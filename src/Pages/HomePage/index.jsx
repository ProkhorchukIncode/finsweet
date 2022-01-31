import Hero from "../../Components/Hero"
import HowWeWork from "../../Components/HowWeWork"
import OurProjects from "../../Components/OurProjects"
import Features from "../../Components/Features"
import ClientsComments from "../../Components/ClientsComments"
import Questions from "../../Components/Questions"
import SendInquiry from "../../Components/SendInquiry"
import OurBlog from "../../Components/OurBlog"

const HomePage = () => {

    return (
        <>
            <Hero/>
            <HowWeWork/>
            <OurProjects/>
            <Features/>
            <ClientsComments/>
            <Questions/>
            <SendInquiry/>
            <OurBlog numberBlogs={3} scroll={false}/>
        </>
    )
}

export default HomePage