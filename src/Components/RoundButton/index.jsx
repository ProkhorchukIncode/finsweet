import './RoundButton.css'

const RoundButton = ({children, type, className}) => {
    return (
        <div className='roundButton-box'>
            <button type={type} className={className}>{children}</button>
        </div>
    )
}

export default RoundButton