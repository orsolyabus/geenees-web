import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  const URL = "https://stgapi.geenees.co/1.0/login"

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    const email = form.elements.email.value
    const password = form.elements.password.value
    const userLogin = {
      "email": email,
      "password": password
    }
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin)
    })
      .then(res => res.json())
// TO DO: handle errors
      .then(user => {
        console.log("user logged in");
        localStorage.setItem('geenee-session', user.data.session_info.session);
      })
      .catch(error => "unable to log in, check email and password");
  }

  return (
    <Container >
      <h1>Welcome to Geenees!</h1>
      <Form className="login" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login;