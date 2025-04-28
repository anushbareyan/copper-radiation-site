import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from './Avatar';
import './Hero.css';

const Hero = () => {
  return (
    <Container fluid className="hero-container">
      <Row className="justify-content-center align-items-center text-center">
        <Col md={8} className="hero-content">
          <Avatar />
          <h1 className="hero-name">Anush Bareyan</h1>
          <p className="hero-description">
            Research and tools on the effects of space radiation on copper interconnects.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
