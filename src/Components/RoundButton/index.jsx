import './RoundButton.css'

const RoundButton = ({text, type, onClick}) => {
    return (
        <div className='roundButton-box'>
            <button type={type} className='roundButton-button' onClick={onClick}>{text}</button>
        </div>
    )
}

export default RoundButton