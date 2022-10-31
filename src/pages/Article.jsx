import React from 'react'

import Navbarz from '../components/Navbar'

import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'
import article4 from '../assets/article4.png'
import article5 from '../assets/article5.png'
import article6 from '../assets/article6.png'
import article7 from '../assets/article7.png'
import article8 from '../assets/article8.png'
import article9 from '../assets/article9.png'

function Article() {
  return (
    <div>
        <Navbarz/>
        <Container>
        <div style={{
          paddingLeft:'70px',
          paddingRight:'70px',
        }}>
          <Row className="g-4" md={3}>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article1} /><br/>
                        <h5>How to create meaningful progress with design?</h5>
                        <p>It takes hard work to find the balance between values and aims.</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article2} /><br/>
                        <h5>Is It Ok to Cheat to be a Better UX/UI Designer?</h5>
                        <p>How can cheating in design help you become a better designer?</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article3} /><br/>
                        <h5>Try peak-end rule on user journey map</h5>
                        <p>Designing a user flow requires careful management of resources.</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article4} /><br/>
                        <h5>How to increase acquisition and conversion rate through redesign?</h5>
                        <p>Redesign Challenge : Zonation Feature of Indonesia Covid-19 Mobile App</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article5} /><br/>
                        <h5>You Don’t Need To Be Perfect To Be A UX Designer</h5>
                        <p>Lean into your uncertainty</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article6} /><br/>
                        <h5>Designing a tool for Web3 Governance — A UX case study</h5>
                        <p>Team: Underscore Protocol (_Prtcl) Role: UX Designer.</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article7} /><br/>
                        <h5>Design Maturity: happy path to nowhere?</h5>
                        <p>A UX designer and UI designer both work on creating beautiful interfaces, but their involvement and skill sets are required at different…</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article8} /><br/>
                        <h5>UI vs. UX Designer: Which Career Path To Choose?</h5>
                        <p>How can cheating in design help you become a better designer?</p>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to='/detailarticle' className="text-decoraction-none" style={{textDecoration:"none", color:'black'}}>
                    <Card style={{border: 'none'}}>
                        <Card.Img variant="top" src={article9} /><br/>
                        <h5>Top 10 Online Platforms to Learn UI/UX Design</h5>
                        <p>Companies around the world have a hard time finding qualified UI and UX designers. To make matters worse, demand for UX professionals…</p>
                    </Card>
                </Link>
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

export default Article