import Container from "../Container";
import LinkWithArrow from "../LinkWithArrow";

import './OurProjects.scss'

const OurProjects = () => {
    return(
        <section className="ourProjects-container">
            <Container>
                <div className="ourProjects-info ourProjects-flex">
                    <h2>View our projects</h2>
                    <LinkWithArrow path='/features' className='ourProjects__link'>
                    View More
                    </LinkWithArrow>
                </div>
                <div className='ourProjects-flex ourProjects-other-projects__box'>
                    <div className="ourProjects-workhub__box">
                        <div className="ourProjects-workhub__image-box"></div>
                        <div className="ourProjects-workhub__info-box">
                            <h6 className="ourProjects-project__title">Workhub office Webflow Webflow Design</h6>
                            <p className="ourProjects-workhub__text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <LinkWithArrow path='/features'>
                            View project 
                            </LinkWithArrow>
                        </div>
                    </div>
                    <div>
                        <div className="ourProjects-unisaas__box">
                            <div className="ourProjects-unisaas__image-box"></div>
                            <div className="ourProjects-unisaas__info-box">
                                <h6 className="ourProjects-project__title">Unisaas Website Design</h6>
                                <LinkWithArrow path='/features'>
                                View project
                                </LinkWithArrow>
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