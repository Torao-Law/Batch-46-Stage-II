import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Welcome from "./welcome"
import GuestGreeting from "./GuestGreeting"

export default class LifeCycle extends Component {
  constructor() {
    super() 
    this.state= {
        isLogin: false,
        user: {
            email: "",
            password: ""
        }
    }
    console.log("Ini adalah pesan dari mounting 1")
  }

    componentDidMount() {
        console.log("Ini adalah pesan dari mounting 2")
        console.log(this.state) 
    }

    componentDidUpdate() {
        console.log("Ini adalah pesan dari updating")
        console.log(this.state) 
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        this.setState({
            isLogin: true, 
            user: {
                email,
                password,
            }
        })

        console.log(this.state)
    }
    
    // controlId="formBasicEmail"
    //controlId="formBasicPassword"
    render() {
      console.log("Ini adalah pesan dari mounting 3")
    return (
        <>
        {this.state.isLogin ? (
          <Welcome />
        ) : (
          <>
            <GuestGreeting />
            
            <Container>
              <Row className="d-flex justify-content-center mt-5">
                <Col md="4">
                  <Form onSubmit={this.handleOnSubmit}>
                    <div className="text-center h5">Login</div>

                    <Form.Group className="mb-3" >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        size="sm"
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        id="password"
                        name="password"
                        size="sm"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="sm">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}