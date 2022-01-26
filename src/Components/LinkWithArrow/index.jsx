import { Link } from 'react-router-dom'

import './LinkWithArrow.css'

const LinkWithArrow = ({path, className, children}) => {
    return(
        <Link to={path} className={className}>
            {children}
            <span className='arrow'>
                &#10230;
            </span>
        </Link>
    )
}

export default LinkWithArrow