import { useState } from 'react'

import svg from '../../Images/ButtonClose.svg'

import './Accordion.css'

const Accordion = ({ number, title, children }) => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <>
            <div className='accordion-flex'>
                <div className='accordion-box-title' onClick={() => setOpen(true)}>
                    <p className='accordion-number'>{number}</p>
                    <h6>
                        {title}
                    </h6>
                </div>
                <button className={`accordion-button ${isOpen ? 'accordion-open' : 'accordion-close'}`}  onClick={() => setOpen(false)}>
                    <img src={svg} alt='close'/>
                </button>
            </div>
            <div className={`accordion-content-box ${!isOpen ? "visually-hidden" : "accordion-content-box-open"}`}>
                <p className={` ${!isOpen ? "accordion-content" : "accordion-content-open"}`}>{children}</p>
            </div>
        </>
    )
}

export default Accordion