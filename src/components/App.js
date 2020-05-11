import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SiteInfo from './SiteInfo';
import SiteMessage from './SiteMessage';
import SiteForm from './SiteForm';


function App() {
  return (
    <Container>
      <Row>
        <Col lg = {6}>
        <SiteInfo />
        </Col>

        <Col lg = {6}>
          <SiteMessage />
          <SiteForm />
        </Col>
     </Row>
    </Container>
  );
}

export default App;
