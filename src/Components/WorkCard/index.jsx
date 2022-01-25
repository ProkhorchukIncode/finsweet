import './WorkCard.css'

const WorkCard = ({image, title, text}) => {
    return (<li>
        <div className='workCard-box'>
            <img src={image} alt={title} className='workCard-image'/>
            <h5 className='workCard-title'>{title}</h5>
            <p className='workCard-text'>{text}</p>
        </div>
    </li>
    )
}
export default WorkCard