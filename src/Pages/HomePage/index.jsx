import Hero from "../../Components/Hero"
import HowWeWork from "../../Components/HowWeWork"
import OurProjects from "../../Components/OurProjects"
import Features from "../../Components/Features"
import Questions from "../../Components/Questions"
import SendInquiry from "../../Components/SendInquiry"
import OurBlog from "../../Components/OurBlog"
import Footer from "../../Components/Footer"

const HomePage = () => {
    return (
        <>
            <Hero/>
            <HowWeWork/>
            <OurProjects/>
            <Features/>
            <Questions/>
            <SendInquiry/>
            <OurBlog/>
            <Footer/>
        </>
    )
}

export default HomePage