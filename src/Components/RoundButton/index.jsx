import './RoundButton.css'

const RoundButton = ({text, type}) => {
    return (
        <div className='roundButton-box'>
            <button type={type} className='roundButton-button'>{text}</button>
        </div>
    )
}

export default RoundButton