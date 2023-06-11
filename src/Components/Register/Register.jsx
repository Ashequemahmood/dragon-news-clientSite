import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

   
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name);

        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleAccepted = (event)=>{
      setAccepted(event.target.checked);
  }


    return (
        <Container className="w-25 mx-auto">
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
          
          
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
              onClick={handleAccepted}
              type="checkbox" 
              name='accept'
              label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
          </Form.Group>
          <Button className="w-100" variant="primary" disabled={!accepted} type="submit">
            Register
          </Button>
        </Form>
        <Form.Text className="text-success">Already have an account? <Link to='/login'>Login</Link></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Container>
    );
};

export default Register;