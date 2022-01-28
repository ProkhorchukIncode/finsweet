import { Link } from "react-router-dom"

import Container from "../Container"
import ContactsList from "../ContactsList"

import "./Footer.scss"

import logo from '../../Images/Logo-footer.svg'

const Footer = () => {
    return(
        <footer className="footer-section">
            <Container>
                <div className="footer-flex">
                    <div className="footer-logo-box">
                        <div className="footer-logo-box__box">
                            <Link to={'/home'} >
                                <img src={logo} alt="{finsweet" className="footer-logo-box__link"/>
                            </Link>
                            <p className="footer-logo-box__text">We are always open to discuss your project and improve your online presence.</p>
                        </div>
                        <address className="footer-address">
                            <div className="footer-address__item-box">
                                <p className="footer-address__text">Email me at</p>
                                <a href='mailto:contact@website.com' className="footer-address__link">
                                    contact@website.com
                                </a>
                            </div>
                            <div className="footer-address__item-box">
                                <p className="footer-address__text">Call us</p>
                                <a href='tell:0927 6277 28525' className="footer-address__link">
                                    0927 6277 28525
                                </a>
                            </div>
                        </address>
                    </div>
                    <div className="footer-contacts__box">
                        <h2 className="footer-contacts__title">Lets Talk!</h2>
                        <p className="footer-contacts__text">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className="footer-contacts__links-box">
                            <ContactsList/>
                        </div>                        
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer