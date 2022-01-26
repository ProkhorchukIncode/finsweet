import Container from "../Container"
import NavigationBar from "../NavigationBar"

import './Copyright.css'

const Copyright = () => {
    return (
        <section className="copyright-section">
            <Container>
                <div className="copyright-flex">
                    <p className="copyright-title">Copyright 2022, Finsweet.com</p>
                    <NavigationBar/>
                </div>
            </Container>
        </section>
    )
}

export default Copyright