import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Card from "react-bootstrap/Card";

export class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      passwordValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  mySubmitHandler = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.emailValue);
  };

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    return (
      <div className="background">
        <Container>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}></Col>
            <Col xs={{ order: 1 }}>
              {/* main form */}
              <div id="newstyle">
                <Form onSubmit={this.mySubmitHandler}>
                  <Form.Label style={{ fontWeight: "Bold", fontSize: "20px" }}>
                    LOGIN{" "}
                  </Form.Label>
                  <br />
                  <br />

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      value={this.state.emailValue}
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      value={this.state.passwordValue}
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicCheckbox"
                    style={{ textAlign: "left" }}
                  >
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Form.Group style={{ paddingTop: "5px" }}>
                    <Button size="sm" block>
                      LOGIN
                    </Button>
                  </Form.Group>
                  <Form.Label>
                    {/* dnwdwnfdijij */}

                    <p>
                      Are you new?{" "}
                      <Link to="/Signup" style={{ color: "blue" }}>
                        Sign up
                      </Link>{" "}
                    </p>

                    {/* dfnvefornfiernoviwrnf */}

                    {/* eufnoiiuehoijwoifj */}
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

export default FormPage;
