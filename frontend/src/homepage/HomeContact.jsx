import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomeAboutUs.css';

function HomeContact() {
  const emailRef = useRef();
  const queryRef = useRef();
  const nameRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "16baf22f-1df0-4cea-923a-ab35073fe8e2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Form submitted successfully!');
      // Clear form fields
      emailRef.current.value = '';
      queryRef.current.value = '';
      nameRef.current.value = '';
    } else {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="contact-us" id="contact-us" style={{ marginTop: '20px', width: '80%', marginLeft: '10%' }}>
      <h2 className="heading1">Contact Us</h2>
      <Form style={{ marginTop: '40px' }} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <h5>Name</h5>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter name" name='name' ref={nameRef} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>
            <h5>Email address</h5>
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='email' ref={emailRef} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h5>Your Query</h5>
          </Form.Label>
          <Form.Control as="textarea" rows={3} name='message' ref={queryRef} required />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit Query
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default HomeContact;
