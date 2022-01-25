import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Features from "../Pages/Features";
import Pricing from "../Pages/Pricing";
import FAQ from "../Pages/FAQ";
import Blog from "../Pages/Blog"

const ROUTES = {
    PUBLIC_ROUTES:[
        {
            name: 'Home page',
            path: '/home',
            component: <HomePage/>,
        }, 
        {
            name: 'About us',
            path: '/about-us',
            component: <AboutUs/>,
        },
        {
            name: 'Features',
            path: '/features',
            component: <Features/>,
        },
        {
            name: 'Pricing',
            path: '/pricing',
            component: <Pricing/>,
        },
        {
            name: 'FAQ',
            path: '/faq',
            component: <FAQ/>,
        },
        {
            name: 'Blog',
            path: '/blog',
            component: <Blog/>,
        },
    ],
};

export default ROUTES