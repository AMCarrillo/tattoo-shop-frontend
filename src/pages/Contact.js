import ContactImg from '../assets/contact.jpg';
import '../styles/Contact.css';
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();//STOP default action
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://127.0.0.1:8000/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return (
        <div className='contact'>
            <div className='leftSide'
            style={{backgroundImage:`url(${ContactImg})`}}></div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" id="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter mesage..." name="message" id="message" required></textarea>
                    <button type="submit">{status}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact