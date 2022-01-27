import { Link } from 'react-router-dom'

import './LinkWithArrow.css'

const LinkWithArrow = ({path, children}) => {
    return(
        <Link to={path} className='link-with-arrow'>
            {children}
            <span className='arrow'>
                &#10230;
            </span>
        </Link>
    )
}

export default LinkWithArrow