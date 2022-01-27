import styled from 'styled-components'

const Title = styled.h5`
    margin-bottom: 48px;
`
const FlexContainer = styled.div`
    display: flex;
`
const Img = styled.img`
    width: 52px;
    border-radius: 50%;
`
const UserNameBox = styled.div`
    margin-left: 14px;
`
const UserText = styled.p`
    opacity: 1;
    font-size: ${props => props.position ? '12px' : '18px'};
    line-height: ${props => props.position ? '28px' : '32px'};
`

const SliderCard =({image='', name='User', position='User'}) => {
    return (
        <div>
            <Title>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</Title>
            <FlexContainer>
                <div>
                    <Img src={image} alt={name}/>
                </div>
                <UserNameBox>
                    <UserText>
                        {name}
                    </UserText>
                    <UserText position>
                        {position}
                    </UserText>
                </UserNameBox>
            </FlexContainer>
        </div>
    )
}
export default SliderCard