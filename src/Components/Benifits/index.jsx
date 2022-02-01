import styled from "styled-components";

import AdvantagesCard from "../AdvantagesCard";

import benifits from "./benifits";

import './Benifits.scss'

const Title = styled.h2`
    text-align: center;
    margin-bottom: 48px;
`

const Benifits = () => {
    return(
        <>
            <Title>The benefits of working with us</Title>
            <ul className="benifits-flex">
                {benifits.map(({image, title, text}) => {
                    return <AdvantagesCard 
                        image={image}
                        title={title}
                        text={text}
                        key={image}
                        blue
                    />
                })}
            </ul>
        </>
    )
}

export default Benifits