import { Link } from 'react-router-dom'

import Container from '../Container'
import RoundButton from '../RoundButton'
import LinkWithArrow from '../LinkWithArrow'

import img from '../../Images/Hero/Illustration.svg'

import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero-section">
            <Container>
                <div className='hero-flex'>
                    <div className='hero-box'>
                        <h1 className='hero-title'>Building stellar websites for early startups</h1>
                        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className='hero-box__links-box'>
                            <Link to='/features'>
                                <RoundButton text={'View our work'}/>
                            </Link>
                            <LinkWithArrow path='/features'>
                                View Pricing
                            </LinkWithArrow>
                        </div>
                    </div>
                    <img src={img} alt="Illustration" />
                </div>
            </Container>
        </section>
    )
}
export default Hero