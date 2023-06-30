import React from "react";
import { Link } from "react-router-dom";
// import leftContact from "../assets/img/r6.jpg"
import leftContact from "../assets/img/r1.jpg"
// import leftContact from "../assets/img/4.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import Container from "react-bootstrap/Container"
// import { useNavigate } from "react-router-dom";

const Contact = () => {

    // const x = useNavigate();
    return (

         
            <div className="contact py-3 d-flex justify-content-center align-items-center " id="Contact">
            {/* <h2>contact</h2> */}
      {/* ------------------------------ */}

            <div className="top-form"> 
                
                <div className="left-top-cont">
                    <img  src={leftContact} />
                </div>

                <div className="right-top-cont">

                    <h2 className="mb-4">Contact me </h2>
                    {/* <Form.Label>Example textarea</Form.Label> */}
                    
                {/* <Container> */}
                    <Form>
                       <Row className="row">
                                <Col className="col">
                                    <Form.Group size="sm" className="mb-2 " controlId="exampleForm.ControlTextarea1">
                                        <Form.Control type="text" placeholder="first name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group size="sm" className="mb-2  "  controlId="exampleForm.ControlTextarea1">
                                        <Form.Control type="text" placeholder="last name" />
                                    </Form.Group>
                            </Col>
                       </Row>

                   <Row className="row" >
                       <Col>
                            <Form.Group  size="sm" className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                         <Col>
                            <Form.Group  size="sm" className="mb-2" controlId="formBasicNumber">
                                <Form.Control type="text" data-validation="number" placeholder="phone num" />
                            </Form.Group>
                         </Col>
                       </Row>
                        <Form.Group size="sm" className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                         {/* <Link to="/src/component/Contact.js" > */}
                            <Button className="my-3"  value="submit"  type="submit"  >Send</Button>
                          {/* </Link> */}
                    </Form>
                {/* </Container> */}

                    </div>
                
            </div>  {/**end top-form */}
        
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