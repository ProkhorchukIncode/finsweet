import Container from "../Container"
import RoundButton from "../RoundButton"
import LinkWithArrow from "../LinkWithArrow"

import './SendInquiry.scss'

const SendInquiry = () => {
    return (
        <section className="sendInquiry-section">
            <Container>
                <div className="sendInquiry-flex">
                    <div className="sendInquiry-title-box">
                        <div className="sendInquiry-title-box__image-box"></div>
                        <div className="sendInquiry-title-box__info-box">
                            <h2 className="sendInquiry-title-box__info-title">Building stellar websites for early startups</h2>
                            <p className="sendInquiry-title-box__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                    <div className="sendInquiry-form-box">
                        <h5 className="sendInquiry-form-box__title">Send inquiry</h5>
                        <p className="sendInquiry-form-box__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form className="sendInquiry-form-box__form">
                            <input type='name' placeholder="Your Name" className="sendInquiry-form-box__form-input"/>
                            <input type='email' placeholder="Email" className="sendInquiry-form-box__form-input"/>
                            <input type='url' placeholder="Paste your Figma design URL" className="sendInquiry-form-box__form-input"/>
                        </form>
                        <RoundButton text={'Send an Inquiry'}/>
                        <div className='sendInquiry-form-box__link-box'>
                            <LinkWithArrow path='/about-us' >
                            Get in touch with us
                            </LinkWithArrow>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SendInquiry