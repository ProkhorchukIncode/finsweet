import styled from "styled-components"

import Container from "../Container"

import img from '../../Images/group-of-people-sitting-indoors.png'

const Section = styled.section`
    margin: 40px 0;
    background-color: var(--primary-background-color);
    @media(min-width:992px) {
        margin: 128px 0;
    }
`

const BoxFlex = styled.div`
    @media(min-width:992px) {
        display: flex;
        justify-content: space-between;
    }
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    @media(min-width:992px) {
        margin-right: 50px;
    }
    @media(min-width:1400px) {
        margin-right: 138px;
        align-items: start;
    }
`

const Title = styled.h1`
    margin-bottom: 31px;
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    text-align: center;
    @media(min-width:768px) {
        font-weight: 600;
        font-size: 38px;
        line-height: 56px;
    }
    @media(min-width:992px) {
        font-size: 48px;
        line-height: 64px;
    }
    @media(min-width:1200px) {
        font-size: 54px;
        line-height: 74px;
    }
    @media(min-width:1400px) {
        display: block;
        width: 595px;
        text-align: start;
    }
`

const Image = styled.img`
    max-width: 545px;
    margin:auto;
    @media(min-width:768px) {
        max-width: 545px;
    }
    @media(min-width:992px) {
        max-width: 545px;
    }
    @media(min-width:1200px) {
        width: 545px;
        margin: 0;
    }
`
const Text = styled.p`
    text-align: justify;
    @media(min-width:1400px) {

        display: block;
        width: 484px;
    }
`
const NamePage = styled.p`
    opacity: 1;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 8px;
`

const HeroAboutUs = () => {
    return(
        <Section>
            <Container>
                <BoxFlex>
                    <InfoBox>
                        <NamePage>About us</NamePage>
                        <Title>Our designs solve problems</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                    </InfoBox>
                    <div>
                        <Image src={img} alt='Our company'/>
                    </div>
                </BoxFlex>
            </Container>
        </Section>
    )
}

export default HeroAboutUs