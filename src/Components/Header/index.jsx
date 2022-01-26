import { Link } from "react-router-dom"

import Container from "../Container"
import NavigationBar from "../NavigationBar"
import RoundButton from "../RoundButton"

import "./Header.css"
import img from '../../Images/Logo/Logo-header.svg'

import ROUTES from "../../Routes"
const routes = ROUTES.PUBLIC_ROUTES;

const Header = () => {
    return(
        <header className="header-section">
            <Container>
                <div className="header-container">
                    <Link to={routes[0].path}>
                        <img src={img} alt="{finsweet"/>
                    </Link>
                    <div className="header-navigation-box">
                        <NavigationBar withActive={true}/>
                        <Link to={routes[routes.length-1].path}>
                        <RoundButton className={'header-navigation-box__button'}>
                            {routes[routes.length-1].name}
                        </RoundButton>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header