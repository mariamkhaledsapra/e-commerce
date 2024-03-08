import React from 'react'
import { Form, Button , link, label } from 'react-bootstrap';
const Loginpage = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
          <label className='btn-login mx-auto my-4'> dont have an account? 
             <link to="/signpage" style={{textDecoration:'none'}}>
               <span style={{cursor:"pointer"}} className="text-danger"> Click to register </span>
             </link>
          </label>
        </Form>
      );
}

export default Loginpage
