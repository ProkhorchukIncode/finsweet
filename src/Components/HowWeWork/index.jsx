import { Link } from 'react-router-dom'

import Container from '../Container'
import WorkCard from '../WorkCard'
import Arrow from '../Arrow'

import works from './works'

import './HowWeWork.css'

const HowWeWork = () => {
    return (
        <section className="howWeWork-section">
            <Container>
                <div className='howWeWork-flex'>
                    <div className='howWeWork-info__container'>
                        <h2 className='howWeWork-info__title'>How we work</h2>
                        <p className='howWeWork-info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <Link to='/contact-us' className='howWeWork-info__link'>
                            Get in touch with us 
                            <Arrow/>
                        </Link>
                    </div>
                    <ul className='howWeWork-cards__container'>
                        {works.map(({image, title, text})=>{
                            return(
                                <WorkCard image={image} title={title} text={text} key={image}/>
                            )
                        })}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default HowWeWork