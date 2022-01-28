import { Link } from 'react-router-dom'

import Container from '../Container'
import Accordion from '../Accordion'

import './Questions.scss'

const Questions = () => {
    return (
    <section className='questions-section'>
        <Container>
            <div className='questions-flex'>
                <div className='questions-box-info'>
                    <h3 className='questions-box-info__title'>Frequently asked questions</h3>
                    <Link to='/about-us' className='questions-box-info__link'>Contact us for more info</Link>
                </div>
                <div className='questions-box-accordeon'>
                    <Accordion number={'01'} title={'How much time does it take?'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion>
                    <Accordion number={'02'} title={'What is your class naming convention?'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion>
                    <Accordion number={'03'} title={'How do you communicate?'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion>
                    <Accordion number={'04'} title={'I have a bigger project. Can you handle it?'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion>
                    <Accordion number={'05'} title={'What is your class naming convention?'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion>
                </div>
            </div>
        </Container>
    </section>
    )
}
export default Questions