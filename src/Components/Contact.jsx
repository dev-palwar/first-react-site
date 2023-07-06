import React from 'react'
import "../Styles/Contact.css"
const Contact = () => {
  return (
    <>
        <section className="contact" id='contact'>
            <div className="contact-form">
                <h1>Contact me</h1>
                <div className="inputs">
                    <div className="input-sec">
                        <h3>Name:</h3>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input-sec">
                        <h3>E-Mail:</h3>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input-sec">
                        <h3>Message:</h3>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <button>Send</button>
            </div>
        </section>
    </>
  )
}

export default Contact
