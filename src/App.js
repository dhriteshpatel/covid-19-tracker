import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./app.css";
import Header from './components/Header'
import Present from './components/Present';
import State from './components/State';


const App = () => {
    return (
      <Container>
        <Row>
             <Col className="cols"><Header /></Col>
        </Row>
        <Row>
            <Col xs={3}><State /></Col>
            <Col xs={9}><Present /></Col>
        </Row>
      </Container>
    )
}

export default App;
