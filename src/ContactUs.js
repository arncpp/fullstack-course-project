
import contactBackground from './img/ContactUs/contactBackground.jpg'
import './css/blocks/ContactUs.css';


function ContactUs() {
    return (
        <section className='Contact-us'>

            <div className='Contact-us-container container'>
            <   div className='Contact-us-header-content'>
                        <h2 className='Contact-us-header-heading'>Contact Us</h2>
                </div>
                <div className='Contact-form'>
                    <div className='Contact-form-field form'>
                        <input type='text' placeholder='Name' className='Field-name'></input>
                    </div>
                                        
                    <div className='Contact-form-field form'>
                        <input type='text' placeholder='Email' className='Field-email'></input>
                    </div>
                                        
                    <div className='Contact-form-field form'>
                        <input type='text' placeholder='Message' className='Field-message'></input>
                    </div>

                    <div class="Contact-form-btn">
                        <button className='Button-send'>
                            Send
                        </button>
                    </div>
                </div>

        



            </div>


        
            <div className='Contact-us-background background'>
                <img src={contactBackground} alt='Background color'></img>
            </div>

        </section>
    )
    
}

export default ContactUs;