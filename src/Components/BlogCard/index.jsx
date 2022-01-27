import styled from 'styled-components'

import LinkWithArrow from '../LinkWithArrow'

import './BlogCard.css'

const Img = styled.img`
    margin-bottom: 40px;
`
const Title = styled.h6`
    margin-bottom: 16px;
`
const Text = styled.p`
    font-weight: ${props => props.date ? '' : '400'};
    margin-bottom: ${props => props.text ? '32px' : '16px'};
`

const BlogCard = ({image, date='19 Jan 2022', title, text='It is text', path='/'}) => {
    return (<li>
        <div className='blogCard-box'>
            <Img src={image} alt={title} />
            <Text date >{date}</Text>
            <Title >{title}</Title>
            <Text text >{text}</Text>
            <LinkWithArrow path={path} >
            Read More
            </LinkWithArrow>
        </div>
    </li>
    )
}
export default BlogCard