import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h3 className='contact_title' data-testid="h3tag">Contact me</h3>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='input'>
        <div className='name'>
          <input type="text" name="name" placeholder= "Your Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='email'>
          <input type="email" name="email" placeholder= "Email Address" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='message'>
          <textarea name="message" rows="5" placeholder= "Type your message here!" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className='submit' type="submit">Let's Chat</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
