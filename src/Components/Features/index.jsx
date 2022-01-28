import Container from "../Container";
import AdvantagesCard from "../AdvantagesCard";

import advantages from './advantages'

import './Features.scss'

const Features = () => {
    return(
        <section className="features-section">
            <Container>
                <p className="features-text">Features</p>
                <h2 className="features-title">Design that solves problems, one product at a time</h2>
                <ul className="features-list">
                    {advantages.map(({image, title, text})=>{
                        return(<AdvantagesCard image={image} title={title} text={text} key={image}/>)
                    })}
                </ul>
            </Container>
        </section>
    )
}

export default Features