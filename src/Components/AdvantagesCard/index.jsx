import './Advantages.css'

const AdvantagesCard = ({image, title, text}) => {
    return (<li>
        <div className='advantagesCard-box'>
            <img src={image} alt={title} className='advantagesCard-image'/>
            <h6 className='advantagesCard-title'>{title}</h6>
            <p>{text}</p>
        </div>
    </li>
    )
}
export default AdvantagesCard