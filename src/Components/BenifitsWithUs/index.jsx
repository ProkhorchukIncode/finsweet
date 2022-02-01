import styled from "styled-components";

import Container from "../Container";
import Benifits from "../Benifits";
import LogoList from "../LogoList";

const Section = styled.section`
    padding: 128px 0;
    background-color: #fff;
`
const LogoListBox = styled.div`
    margin-top: 76px;
`

const BenifitsWithUs = () => {
    return(
        <Section>
            <Container>
                <Benifits/>
                <LogoListBox>
                    <LogoList/>
                </LogoListBox>
            </Container>
        </Section>
    )
}

export default BenifitsWithUs