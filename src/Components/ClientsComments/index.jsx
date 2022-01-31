import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Slider from 'react-slick'

import Container from '../Container'
import SliderCard from '../SliderCard'
import Arrow from '../Arrow'

import { fetchListUsers } from '../../Redux/comments/commentsReducer'

import './ClientsComments.scss'

const Section = styled.section`
    max-height:510px;
    padding: 130px 0;
    background-color: var(--secondary-background-color);
`
const FlexContainer = styled.div`

    @media(min-width:1400px) {
        display: flex;
        justify-content: ${props => props.between ? 'space-between' : ''};
    }
`
const BoxInfo = styled.div`
    max-width: 327px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 24px;

    @media(min-width:1400px) {
        margin-bottom: 0px;
        text-align: start;
        margin-left: 0;
        margin-right: 0;
    }
`
const SliderBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 843px;
`
const Title = styled.h3`
    margin-bottom: 16px;
    @media(min-width:576px) {
        font-weight: 500;
        font-size: 36px;
        line-height: 56px;
    }
    @media(min-width:768px) {
        font-weight: 600;
        font-size: 38px;
        line-height: 56px;
    }
    @media(min-width:992px) {
        font-size: 48px;
        line-height: 64px;
    }

`

const PrevArrow = ({ onClick}) => {
    return(
        <button 
            className='arrows leftArrow'
            onClick={onClick}
        >
            <Arrow/>
        </button>
    )
}
const NextArrow = ({ onClick}) => {
    return(
        <button 
            className='arrows rightArrow'
            onClick={onClick}
        >
            <Arrow/>
        </button>
    )
}

const settingsSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
}

const ClientsComments = () => {
    const dispatch = useDispatch()
    const comments= useSelector((store)=> store.comments.entities)

    useEffect(()=>{
        dispatch(fetchListUsers())
    },[dispatch])
    return (
        <Section>
            <Container>
                <FlexContainer between>
                    <BoxInfo>
                        <Title>What our clients say about us</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </BoxInfo>
                    <SliderBox>
                        {comments.length ?<div className='comments-slider'>
                            <Slider {...settingsSlider} >
                                <SliderCard 
                                    key={comments[0].id} 
                                    name={`${comments[0].firstName} ${comments[0].lastName}`} 
                                    image={comments[0].picture} 
                                    position={comments[0].title}
                                />
                                <SliderCard 
                                    key={comments[1].id} 
                                    name={`${comments[1].firstName} ${comments[1].lastName}`} 
                                    image={comments[1].picture} 
                                    position={comments[1].title}
                                />
                                <SliderCard 
                                    key={comments[2].id} 
                                    name={`${comments[2].firstName} ${comments[2].lastName}`} 
                                    image={comments[2].picture} 
                                    position={comments[2].title}
                                />
                                <SliderCard 
                                    key={comments[3].id} 
                                    name={`${comments[3].firstName} ${comments[3].lastName}`} 
                                    image={comments[3].picture} 
                                    position={comments[3].title}
                                />
                                <SliderCard 
                                    key={comments[4].id} 
                                    name={`${comments[4].firstName} ${comments[4].lastName}`} 
                                    image={comments[4].picture} 
                                    position={comments[4].title}
                                />
                            </Slider>
                        </div>
                            :
                            <p>No comments</p>
                        }
                    </SliderBox>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default ClientsComments