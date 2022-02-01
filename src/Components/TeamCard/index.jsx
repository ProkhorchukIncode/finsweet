import facebook from '../../Images/Facebook.svg'
import linkedIn from '../../Images/LinkedIn.svg'
import twitter from '../../Images/Twitter.svg'

import './TeamCard.scss'

const TeamCard = ({title, name, image}) => {
    return(
        <li className='teamCard-box'>
            <div className='teamCard-box-relative'>
                <div className='teamCard-box-image'>
                    <img className='teamCard-image' src={image}/>
                </div>
                <div className='teamCard-box-background'>
                    <ul className='teamCard-contacts-list'>
                        <li>
                            <a href='https://www.facebook.com/'>
                                <img src={facebook} alt='facebook' className='teamCard-contacts-image'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/'>
                                <img src={twitter} alt='twitter' className='teamCard-contacts-image'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/'>
                                <img src={linkedIn} alt='linkedIn' className='teamCard-contacts-image'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h6>{name}</h6>
            <p>{title}</p>
        </li>
    )
}
export default TeamCard