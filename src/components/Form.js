import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export class Former extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      body: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    Axios.post("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userId, id, title, body } = this.state;
    return (
      <Container>
        <Col xs={6} md={4} style={myStyle}>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="text"
                name="userId"
                value={userId}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="body"
                value={body}
                onChange={this.changeHandler}
              />
            </div>
            <br />

            <br />
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </form>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Container>
    );
  }
}

const myStyle = {
  background: "#FFFFFF"
};

export default Former;
