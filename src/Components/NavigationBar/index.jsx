import {Link, useLocation} from "react-router-dom";

import RoundButton from "../RoundButton";

import './NavigationBar.css'

import ROUTES from "../../Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const NavigationBar = () => {
    const {pathname} = useLocation();

    const isActiveLink = (path) => {        
        if(path=== pathname){
            return 'activeLink'
        }
        return 'link'
    }

    return(
        <nav className="navigation-container">
            {routes.map(({name,path}, i)=> {
                if(i!== routes.length-1)
                return(
                <Link to={path} key={path} className={isActiveLink(path)}>
                    {name}
                </Link>)
            })}
            <Link to={routes[routes.length-1].path}>
                <RoundButton className={'navigation-button'}>
                    {routes[routes.length-1].name}
                </RoundButton>
            </Link>
        </nav>
    )
}

export default NavigationBar