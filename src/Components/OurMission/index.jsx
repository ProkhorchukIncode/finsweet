import styled from 'styled-components'

import Container from '../Container'

import img1 from '../../Images/a-man-standing-in-an-office.png'
import img2 from '../../Images/photo-of-women-at-the-meeting.png'

import './OurMission.scss'

const Section = styled.section`
    padding: 128px 0;
    background-color: #EEF4FA;
`

const InfoBox = styled.div`
    max-width: 623px;
    text-align: center;
    margin: 0 auto;
    @media(min-width:992px) {
        margin: 0;
        text-align: start;
        max-width: 400px;
    }
`

const NameSection = styled.p`
    opacity: 1;
`

const Title = styled.h3`
    margin: 16px 0;
`

const Image = styled.img`
    display: none;
    @media(min-width:992px) {
        display: block;
        max-width: 400px;
    }
    @media(min-width:1400px) {
        max-width: 515px;
    }
`

const OurMission = () => {
    return(
        <Section>
            <Container>
                <div className='ourMission-flex'>
                    <InfoBox>
                        <NameSection>Our Mission</NameSection>
                        <Title>Inspire, Innovate, Share</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </InfoBox>
                    <div>
                        <Image src={img1} 
                        alt='a man standing in an office'
                        />
                    </div>
                </div>
                <div className='ourMission-flex'>
                    <InfoBox>
                        <NameSection>Our Vision</NameSection>
                        <Title>Laser focus</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </InfoBox>
                    <Image src={img2} 
                        alt='a man standing in an office'
                        />
                </div>
            </Container>
        </Section>
    )
}
export default OurMission