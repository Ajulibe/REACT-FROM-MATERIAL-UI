import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../index.css";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Signup from "./Signup";
import Card from "react-bootstrap/Card";
import App from "../App";
import { withRouter } from "react-router-dom";

import { Router } from "react-router-dom";

export class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      authenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  mySubmitHandler = event => {
    event.preventDefault();
    console.log("You are submitting " + this.state);
    //posting state data
    const { email, password } = this.state;
    axios
      .post("http://localhost:3000/signin", {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        if (response.data === "logged in") {
          this.props.history.push("/navbar");
        }
      })

      .catch(error => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;

    //setting the new state
    this.setState({
      [name]: value
    });
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
                      value={this.state.email}
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      value={this.state.password}
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
                    <Button
                      size="sm"
                      block
                      type="submit"
                      // onClick={() => props.loggedIn(route)}
                    >
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
                {/* <Form.Group controlId="formBasicEmail">
                  <Link to="/navbar">
                    <Button size="sm" block style={{ borderRadius: "2%" }}>
                      SEARCH
                    </Button>
                  </Link>
                </Form.Group> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(FormPage);
