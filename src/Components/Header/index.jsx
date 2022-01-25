import { Link } from "react-router-dom"

import Container from "../Container"
import NavigationBar from "../NavigationBar"

import "./Header.css"
import img from '../../Images/Logo/Logo-header.svg'

import ROUTES from "../../Routes"
const routes = ROUTES.PUBLIC_ROUTES;

const Header = () => {
    return(
        <section className="header-section">
            <Container>
                <div className="header-container">
                    <Link to={routes[0].path}>
                        <img src={img} alt="{finsweet" width='121,41' height='27,43'/>
                    </Link>
                    <NavigationBar/>
                </div>
            </Container>
        </section>
    )
}

export default Header