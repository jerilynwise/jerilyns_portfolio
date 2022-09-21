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
      <form className="border border-light p-5" onSubmit={handleSubmit}>
      <p Name="h4 mb-4 text-center">Contact Me</p>
      <input type="text" 
        name="name"   
        placeholder= "Your Name" 
        className='form-control mb-4'
        defaultValue={name} onBlur={handleChange} />


         <input type="email" 
         id="defaultContactFormEmail" 
         className="form-control mb-4" 
         placeholder="E-mail">
          defaultValue={email} onBlur={handleChange} 
          </input>

        <textarea 
        className="form-control rounded-0" 
        id="exampleFormControlTextarea2" 
        rows="3" 
        placeholder="Message">
        defaultValue={message} onBlur={handleChange}
        </textarea>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="btn btn-info btn-block" type="submit">Send</button>
  
      </form>
    </section>
  );
}

export default ContactForm;
