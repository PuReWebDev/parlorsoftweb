import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const Footer = () => (
  <Row style={{position: 'absolute',width: '100%', height: '40px'}}>
     <Col xs={12} md={8}>
       xs=12 md=8
     </Col>
     <Col xs={6} md={4}>
       xs=6 md=4
     </Col>
   </Row>
)
