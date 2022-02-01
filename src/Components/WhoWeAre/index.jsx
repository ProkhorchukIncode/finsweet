import styled from "styled-components"

import Container from "../Container"

import img from '../../Images/man-in-blue-jacket-looking-at-white-board-7413916-min.png'

const Section = styled.section`
    padding-bottom: 128px;
    background-color: var(--primary-background-color);
`

const BackgroundBox = styled.div`
    background: #F4F5F5;
    padding: 80px;
`
const NameSection = styled.p`
    opacity: 1;
    text-align: center;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    @media(min-width:992px) {
        font-size: 48px;
        line-height: 64px;
    }
    @media(min-width:1200px) {
        font-size: 54px;
        line-height: 74px;
    }
    @media(min-width:1400px) {
        text-align: start;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        padding-bottom: 0;
    }
`

const FlexBox = styled.div`
    @media(min-width:992px) {
        display: flex;
        justify-content: space-between;
    }
`
const InfoBox = styled.div`
    text-align: center;
    max-width: 515px;
    padding: 15px;
    @media(min-width:992px) {
        padding: 0;
        text-align: start;
    }
`
const Title = styled.h3`
    margin-bottom: 16px;
`

const WhoWeAre = () => {
    return(
        <Section>
            <Container>
                <BackgroundBox>
                    <NameSection>Who we are</NameSection>
                    <FlexBox>
                        <InfoBox>
                            <Title>Goal focussed</Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </InfoBox>
                        <InfoBox>
                            <Title>Continuous improvement</Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </InfoBox>
                    </FlexBox>
                </BackgroundBox>
                <div>
                    <img src={img} alt='We are working'/>
                </div>
            </Container>
        </Section>
    )
}

export default WhoWeAre