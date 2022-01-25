import {Link, useLocation} from "react-router-dom";

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
        <div className="navigation-container">
            {routes.map(({name,path})=> {
                return(
                <Link to={path} key={path} className={isActiveLink(path)}>
                    {name}
                </Link>)
            })}
        </div>
    )
}

export default NavigationBar