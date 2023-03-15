import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

import { Row, Col, Container } from "react-bootstrap";

const Authentication = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Login">
                <Login />
              </Tab>
              <Tab eventKey="profile" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Authentication
