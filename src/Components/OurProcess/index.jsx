import styled from 'styled-components'

import Container from '../Container'
import ProcessCard from '../ProcessCard'

import './OurProcess.scss'

const Section = styled.section`
    padding-bottom: 128px;
    background-color: var(--primary-background-color);
`
const Title = styled.h2`
    margin-bottom: 48px;
    text-align: center;
`

const OurProcess =() => {
    return(
        <Section>
            <Container>
                <Title>The process we follow</Title>
                <ul className='ourProcess-flex'>
                    <ProcessCard 
                        title='Planning'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    />
                    <ProcessCard 
                        title='Conception'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    />
                    <ProcessCard 
                        title='Design'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    />
                    <ProcessCard 
                        title='Development'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
                    />
                </ul>
            </Container>
        </Section>
    )
}
export default OurProcess