import { useState } from 'react'

import RoundButton from '../RoundButton'

import svg from '../../Images/ButtonClose.svg'

import './Modal.scss'

const Modal = ({modalOpen, closeModal}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')

    const onChange = (event) => {
        switch (event.target.id) {
            case "name":
                setName(event.target.value)
                break;
            case "email":
                setEmail(event.target.value)
                break;
            case "phone":
                setPhone(event.target.value)
                break;
            case "comment":
                setComment(event.target.value)
                break
            default:
                break;
        }
    }

    return (
        <section className={`${modalOpen ? 'modal-section' : 'visually-hidden'}`} 
        onClick={closeModal} 
        >
            <div className='modal-box' >
                <div className='modal-border'>  
                    <h2 className="modal-title">Contact us</h2>
                    <form className="modal-form">
                        <input type="text" className="modal-form__input" id="name" placeholder="Your name" value={name} onChange={onChange}/>
                        <input type="tel" className="modal-form__input" id="phone" placeholder="Your phone" value={phone} onChange={onChange}/>
                        <input type="email" className="modal-form__input" id="email" placeholder="Your email" value={email} onChange={onChange}/>
                        <textarea  id="comment" rows="10" placeholder="Your comments" className="modal-form__input" value={comment} onChange={onChange}/>
                        <div className="modal-form__checkbox-conteiner">
                            <input type="checkbox" className="modal-form__checkbox" id="agree" />
                            <label className="modal-form__checkbox-label" htmlFor="agree">
                                I agree
                                <a href="/">Terms of an agreement</a>
                            </label>
                        </div>
                        <RoundButton text='Send'/>
                    </form>
                        <button className='modal-button-close'>
                            <img src={svg} alt='close' className='modal-image-close'/>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default Modal