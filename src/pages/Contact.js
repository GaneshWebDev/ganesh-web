import '../App.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
function ContactUs() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u170n9v', 'template_txk7bea', form.current, 'BDSXOzoHRr0e8mM3I')
          .then((result) => {
              //console.log(result.text);
              alert("Email sent successfully!");
          }, (error) => {
              //console.log(error.text);
              alert("FAILED!"+error);
          });
      };

  return (
    <div className="ContactUs">
          <form ref={form} onSubmit={sendEmail}>
          <span className='touch'>Get in touch</span>
            <div className='form-group'>
              <input
                type="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className='form-group'>
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className='form-group'>
              <textarea
              placeholder="Message"
              name='message'
              rows="5"
              ></textarea>
            </div>
            <div className='form-group'>
            <button>send message</button>
            </div>
            
          </form>
          <div className='second'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280.293235655132!2d80.27625797725584!3d16.773027965190803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35bca8b9553d9d%3A0x53a0d0f9d506abcf!2sNandigama%2C%20Andhra%20Pradesh%20521185!5e0!3m2!1sen!2sin!4v1674119134658!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
  </div>
  );
}
export default ContactUs;