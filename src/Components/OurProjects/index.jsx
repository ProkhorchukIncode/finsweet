import { Link } from "react-router-dom";

import Container from "../Container";
import Arrow from "../Arrow";

import './OurProjects.css'

const OurProjects = () => {
    return(
        <section className="ourProjects-container">
            <Container>
                <div className="ourProjects-flex ourProjects-info">
                    <h2>View our projects</h2>
                    <Link to='/features' className='ourProjects__link'>
                    View More &#10230;
                    </Link>
                </div>
                <div className='ourProjects-flex'>
                    <div className="ourProjects-workhub__box">
                        <div className="ourProjects-workhub__image-box"></div>
                        <div className="ourProjects-workhub__info-box">
                            <h6 className="ourProjects-project__title">Workhub office Webflow Webflow Design</h6>
                            <p className="ourProjects-workhub__text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <Link to='/features' className='ourProjects-link'>
                            View project 
                            <Arrow/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="ourProjects-unisaas__box">
                            <div className="ourProjects-unisaas__image-box"></div>
                            <div className="ourProjects-unisaas__info-box">
                                <h6 className="ourProjects-project__title">Unisaas Website Design</h6>
                                <Link to='/features' className='ourProjects-link'>
                                View project 
                                <Arrow/>
                                </Link>
                            </div>
                        </div>
                        <div className="ourProjects-church__image-box"></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurProjects