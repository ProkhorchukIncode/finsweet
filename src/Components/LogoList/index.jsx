import styled from 'styled-components'

import img1 from '../../Images/Logo 1.svg'
import img2 from '../../Images/Logo 2.svg'
import img3 from '../../Images/Logo 3.svg'
import img4 from '../../Images/Logo 4.svg'
import img5 from '../../Images/Logo 5.svg'

const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(min-width:992px) {
        justify-content: space-around;
        flex-direction: row;
    }
`
const InfoBox = styled.div`
    margin-bottom: 30px;

    @media(min-width:1400px) {
        margin-bottom: 0;
        margin-right: 92px;
    }
`
const LogoListBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media(min-width:1400px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        width: 1015px;
    }
`

const Image = styled.img`
    height: 60px;
    margin-bottom: 20px;

    @media(min-width:1400px) {
        height: 32px;
        width: calc((100% - 80px)/5);
    }
`

const LogoList = () => {
    return(
        <Box>
            <InfoBox>
                <h3>100.000+</h3>
                <p>Finsweet Users</p>
            </InfoBox>
            <LogoListBox>
                <Image src={img1} alt='Logo'/>
                <Image src={img2} alt='Logo'/>
                <Image src={img3} alt='Logo'/>
                <Image src={img4} alt='Logo'/>
                <Image src={img5} alt='Logo'/>
            </LogoListBox>
        </Box>
    )
}

export default LogoList