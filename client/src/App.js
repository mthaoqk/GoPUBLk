import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import CreateProject from "./pages/CreateProject/CreateProject";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search//Search";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={CreateProject} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/profile" component={Profile} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
