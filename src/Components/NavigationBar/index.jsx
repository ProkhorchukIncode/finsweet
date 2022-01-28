import {Link, useLocation} from "react-router-dom";

import './NavigationBar.scss'

import ROUTES from "../../Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const NavigationBar = ({withActive}) => {
    const {pathname} = useLocation();

    const isActiveLink = (path) => {   
        if(withActive){
            if(path=== pathname){
                return 'activeLink'
            }
            return 'link'
        }     
    }

    return(
        <nav className="navigation-container">
            {routes.map(({name,path}, i)=> {
                if(i!== routes.length-1){
                    return(
                    <Link to={path} key={path} className={isActiveLink(path)}>
                        {name}
                    </Link>)
                }
            })}
        </nav>
    )
}

export default NavigationBar