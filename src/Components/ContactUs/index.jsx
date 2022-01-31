import { Link } from "react-router-dom"

import Container from "../Container"
import ContactsList from "../ContactsList"

import "./ContactUs.scss"

import logo from '../../Images/Logo-footer.svg'

const ContactUs = () => {
    return(
        <section className="contactUs-section">
            <Container>
                <div className="contactUs-flex">
                    <div className="contactUs-logo-box">
                        <div className="contactUs-logo-box__box">
                            <Link to={'/home'} >
                                <img src={logo} alt="{finsweet" className="contactUs-logo-box__link"/>
                            </Link>
                            <p className="contactUs-logo-box__text">We are always open to discuss your project and improve your online presence.</p>
                        </div>
                        <address className="contactUs-address">
                            <div className="contactUs-address__item-box">
                                <p className="contactUs-address__text">Email me at</p>
                                <a href='mailto:contact@website.com' className="contactUs-address__link">
                                    contact@website.com
                                </a>
                            </div>
                            <div className="contactUs-address__item-box">
                                <p className="contactUs-address__text">Call us</p>
                                <a href='tell:0927 6277 28525' className="contactUs-address__link">
                                    0927 6277 28525
                                </a>
                            </div>
                        </address>
                    </div>
                    <div className="contactUs-contacts__box">
                        <h2 className="contactUs-contacts__title">Lets Talk!</h2>
                        <p className="contactUs-contacts__text">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className="contactUs-contacts__links-box">
                            <ContactsList/>
                        </div>                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactUs