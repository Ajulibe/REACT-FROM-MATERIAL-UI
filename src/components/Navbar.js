import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="background3">
        <div id="searchbox">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="search" placeholder="search" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Link to="/navbar">
              <Button size="sm" block style={{ borderRadius: "2%" }}>
                SEARCH
              </Button>
            </Link>
          </Form.Group>
        </div>
      </div>
    );
  }
}

export default Navbar;
