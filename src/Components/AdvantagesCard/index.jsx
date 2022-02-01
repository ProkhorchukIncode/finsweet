import styled from 'styled-components'

const Box = styled.div`
    box-sizing: border-box;
    max-width: 405px;
    height: 316px;
    padding-top: 53px;
    padding-left: 48px;
    padding-right: 33px;
    padding-bottom: 48px;

    background-color: ${props => props.blue ? '#F4F6FC' : '#FFF'};
`

const Image = styled.img`
    width: 32px;
    margin-bottom: 25px;
`

const Title = styled.h6`
    margin-bottom: 12px;
`

const AdvantagesCard = ({image, title, text, blue}) => {
    return (<li>
        <Box blue={blue}>
            <Image src={image} alt={title}/>
            <Title>{title}</Title>
            <p>{text}</p>
        </Box>
    </li>
    )
}
export default AdvantagesCard