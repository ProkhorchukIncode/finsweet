import Collapsible from 'react-collapsible'

import svg from '../../Images/ButtonClose.svg'

import './Accordion.scss'

const Accordion = ({ number, title, children }) => { 
    return (
        <div className='accordion-box'>
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
        </div>
    )
}

export default Accordion