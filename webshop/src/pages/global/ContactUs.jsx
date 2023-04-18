import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_fum24bj', 'template_ld2lsyd', form.current, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="center" ref={form}>
      {/* <label>Name</label> <br />
      <input type="text" name="from_name" /> <br /> */}
      {/* <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br /> */}
      <br />
      <TextField name="from_name" label="Name" variant="outlined" /> <br /><br />
      <TextField name="from_email" label="Email" variant="outlined" /> <br /><br />
      <TextField name="message" label="Message" variant="outlined" /> <br /><br />
      <Button variant="contained" onClick={sendEmail}>Send</Button> <br />
    </form>
  );
};