import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./Search.css";

const Search = () => (
  <div>
    <Hero backgroundImage="https://i.ytimg.com/vi/LeNAkDqAlNA/maxresdefault.jpg">
      <h1>goPUBLC</h1>

    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        <h1> Search </h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
     
        </Col>
      </Row>
    </Container>
  </div>
);

export default Search;
