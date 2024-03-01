import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // handle input user value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  };

  // handeling form submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
  };

  // reset form
  const handleReset = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="registration-image">
              
            </div>
          </Col>
          <Col>
            <h1 className="mt-3 mb-1 ">Login Pgae</h1>
            <Form className="mt-3" onSubmit={handleSubmit} onReset={handleReset}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter email"
                  required
                  autocomplete="off"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Password"
                  required
                  autocomplete="off"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="success" type="submit" className="btn mx-2">
                Login Now
              </Button>
              <Button variant="secondary" type="reset" className="btn mx-2">
                Reset
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
