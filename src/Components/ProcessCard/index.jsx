import styled from 'styled-components'

const Box = styled.li`
    max-width: 296px;
    padding-bottom: 20px;
`
const FlexBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`
const Round = styled.div`
    margin-right: 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--primary-link-color);
`
const Line = styled.div`
    box-sizing: border-box;
    width: 224px;
    opacity: 0.4;
    border: 2px dashed var(--primary-link-color);
`
const Title = styled.h6`
    margin-bottom: 8px;
`

const ProcessCard = ({title, text}) => {
    return(
        <Box>
            <FlexBox>
                <Round/>
                <Line/>
            </FlexBox>
            <div>
                <Title>{title}</Title>
                <p>{text}</p>
            </div>
        </Box>
    )
}

export default ProcessCard