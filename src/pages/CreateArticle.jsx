import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import Navbarz from '../components/Navbar'

function CreateArticle() {
  return (
    <div>
        <Navbarz/>
        <Container>
            <Row>
                <Col sm={8}>
                    <h3>
                        Create a New Article
                    </h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Article Title" />
                        </Form.Group>
                        <div class="form-group" >
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea 
                                placeholder="Write your Story" 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                style={{
                                    height:'600px'
                                }}></textarea>
                        </div>
                    </Form>
                </Col>
                <Col sm={4}>
                    <h3>
                        Publication Detail
                    </h3>
                    <Form>
                    <div class="form-group" >
                            <label for="exampleFormControlTextarea1">Short description</label>
                            <textarea 
                                placeholder="Enter your Article Short Description" 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                              ></textarea>
                        </div>
                        <br/>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Thumbnail</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            <br/>
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Published"
                            />
                            <br/>
                            <Button variant='danger'>
                                Publish
                            </Button>
                        </Form>

                </Col>
            </Row>
        </Container><br/>
        <footer className='bg-danger' style={{minHeight:'50px'}}>
        <Container 
          style={{
            color:'white'
          }}>
          <p style={{paddingTop:'13px'}}>Copyright © Sahaware Asessment 2021</p>
        </Container>
      </footer>
    </div>
  )
}

export default CreateArticle