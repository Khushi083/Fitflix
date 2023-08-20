import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k7wmfmr', 'template_2uwoyyi', form.current, 'YLzSoLOuqV9BaR82p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'> ready to</span>
                    <span> level up</span>
                </div>
                <div>
                    <span> your body</span>
                    <span className='stroke-text'> with us?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user-email' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join