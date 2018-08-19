import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./About.css";

const About = () => (
  <div>
    <Hero backgroundImage="https://i.ytimg.com/vi/LeNAkDqAlNA/maxresdefault.jpg">
      <h1>goPUBLC</h1>

    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <div className="jumbotron">
            <form>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <input type="password" class="form-control" id="passWord" placeholder="Enter password"></input>
              <a class="forgottonPass" href="#" target="_blank">Forgot Password?</a>
              <br></br>
              <button type="submit" class="btn btn-primary">Sign In</button>
              <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
