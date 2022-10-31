import React from 'react'

import Navbarz from '../components/Navbar'

import homeimg from '../assets/homeimg.png'
import { Container, Card, Row, Col } from 'react-bootstrap';

import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'

export default function Home() {
  return (
    <div>
      <Navbarz/>
      <Container>
        <div>
          <img 
          src={homeimg}
          alt='homeimg' 
          style={{
            width:'100%',
            marginTop:'10px'
          }}/>
        </div>
        <div className="d-flex justify-content-center" style={{marginTop:'50px'}}>
              <h2
                className='fw-bold'
                style={{marginBottom:'-50px'}}>
                Article
              </h2>
        </div>
        <div style={{
          padding:'70px'
        }}>
          <Row className="g-4" md={3}>
            <Col>
              <Card style={{border: 'none'}}>
                <Card.Img variant="top" src={article1} /><br/>
                <h5>How to create meaningful progress with design?</h5>
                <p>It takes hard work to find the balance between values and aims.</p>
              </Card>
            </Col>
            <Col>
              <Card style={{border: 'none'}}>
                <Card.Img variant="top" src={article2} /><br/>
                <h5>Is It Ok to Cheat to be a Better UX/UI Designer?</h5>
                <p>How can cheating in design help you become a better designer?</p>
              </Card>
            </Col>
            <Col>
              <Card style={{border: 'none'}}>
                <Card.Img variant="top" src={article3} /><br/>
                <h5>Try peak-end rule on user journey map</h5>
                <p>Designing a user flow requires careful management of resources.</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
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
