import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "email",
      passwordValue: "email"
    };
  }
  mySubmitHandler = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  render() {
    const message = (
      <div style={{ display: "inline" }}>
        <i>I accept the</i>
        <a href=""> Terms and Conditions</a>{" "}
      </div>
    );

    return (
      <div className="background2">
        <Container>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}></Col>
            <Col xs={{ order: 1 }}>
              <div id="newstyle">
                <Form onSubmit={this.mySubmitHandler}>
                  <div style={{ borderBottom: "1px solid #dee3e2" }}>
                    <Form.Label
                      style={{ fontWeight: "Bold", fontSize: "20px" }}
                    >
                      SIGN UP{" "}
                    </Form.Label>
                    <Form.Label
                      style={{ fontWeight: "Normal", Color: "#dee3e2" }}
                    >
                      Please fill in this form to create an account!{" "}
                    </Form.Label>
                  </div>
                  <br />

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="First Name"
                      name="firstName"
                      onChange={this.handleChange}
                    />
                    <br />
                    <Form.Control
                      type="email"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    <br />
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicCheckbox"
                    style={{ textAlign: "left" }}
                  >
                    <Form.Check
                      type="checkbox"
                      label={message}
                      style={{ fontSize: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group style={{ paddingTop: "5px" }}>
                    <Button size="sm" block>
                      SIGN UP
                    </Button>
                  </Form.Group>
                  <Form.Label
                    style={{ fontWeight: "Normal", Color: "#dee3e2" }}
                  >
                    Already a user? <Link to="/">Login</Link>
                  </Form.Label>
                </Form>
              </div>
              <br />
              <div>
                <Form.Group controlId="formBasicEmail">
                  <Link to="/navbar">
                    <Button size="sm" block style={{ borderRadius: "2%" }}>
                      SEARCH
                    </Button>
                  </Link>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
