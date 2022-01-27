import Collapsible from 'react-collapsible'

import svg from '../../Images/ButtonClose.svg'

import './Accordion.css'

const Accordion = ({ number, title, children }) => { 
    return (
        <Collapsible trigger={
            <div className='accordion-flex'>
                <div className='accordion-box-title' >
                    <p className='accordion-number'>{number}</p>
                    <h6>
                        {title}
                    </h6>
                </div>
                <button className={`accordion-button`}  >
                    <img src={svg} alt='close'/>
                </button>
            </div>
        }>
            <p className="accordion-content">{children}</p>
        </Collapsible>
    )
}

export default Accordion