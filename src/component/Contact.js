import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// import { useNavigate } from "react-router-dom";

const Contact = () => {

    // const x = useNavigate();
    return (


         
            <div className="contact py-3 d-flex justify-content-center align-items-center ">
            {/* <h2>contact</h2> */}
      {/* ------------------------------ */}


            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            

            {/* ------------------------------ */}


            <div className="contact-content ">
                <div className="text-cont"> 
                   take a look with the Projects and Leave Your Email
                </div>
                <div className="form-cont">
                    <Form  className="form" >
                       <Form.Group as={Col} controlId="formGridEmail">
                           <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                         <Button type="submit">Contact me</Button>

                    </Form>
                </div>

                
            {/* <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Button
                    </Button>
                </InputGroup> */}


                
            </div> {/* /** end contact-content */}

             
            </div>  /**end contact */
            
        
    )

}

export default Contact; 