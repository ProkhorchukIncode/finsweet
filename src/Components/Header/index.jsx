import { Link } from "react-router-dom"

import Container from "../Container"
import NavigationBar from "../NavigationBar"
import RoundButton from "../RoundButton"

import "./Header.scss"
import img from '../../Images/Logo-header.svg'

import ROUTES from "../../Routes"
const routes = ROUTES.PUBLIC_ROUTES;

const Header = ({onClick}) => {
    return(
        <header className="header-section">
            <Container>
                <div className="header-container">
                    <Link to={routes[0].path}>
                        <img src={img} alt="{finsweet"/>
                    </Link>
                    <div className="header-navigation-box">
                        <NavigationBar withActive={true}/>
                        <RoundButton 
                            text='Contact us'
                            onClick={onClick}
                        />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header