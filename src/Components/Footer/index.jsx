import Container from "../Container"
import NavigationBar from "../NavigationBar"

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <div className="footer-flex">
                    <p className="footer-title">Copyright 2022, Finsweet.com</p>
                    <NavigationBar/>
                </div>
            </Container>
        </footer>
    )
}

export default Footer