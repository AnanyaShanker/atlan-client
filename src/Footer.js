import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 AI MODELS. All rights reserved. Made with <span role="img" aria-label="heart">❤️</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
