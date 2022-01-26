import facebook from '../../Images/Facebook.svg'
import instagram from '../../Images/Instagram.svg'
import linkedIn from '../../Images/LinkedIn.svg'
import twitter from '../../Images/Twitter.svg'

import "./ContactsList.css"

const ContactsList = () => {
    return(
        <ul className='contactsList-list'>
            <li>
                <a href='https://www.facebook.com/'>
                    <img src={facebook} alt='facebook'/>
                </a>
            </li>
            <li>
                <a href='https://twitter.com/'>
                    <img src={twitter} alt='twitter'/>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/'>
                    <img src={instagram} alt='instagram'/>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/'>
                    <img src={linkedIn} alt='linkedIn'/>
                </a>
            </li>
        </ul>
    )
}

export default ContactsList