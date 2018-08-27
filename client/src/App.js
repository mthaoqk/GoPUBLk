import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateProject from "./pages/CreateProject";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search";
import LandingPage from "./pages/LandingPage";
import ProjectDescription from "./pages/ProjectDesc";
import Error from "./pages/404";
import Results from "./pages/Results";
import Discover from "./pages/Discover/discover";
import MyInvenstments from "./pages/MyInvestments";
import MyProjects from "./pages/MyProjects";
import Favorites from "./pages/Favorites";
import MyOffers from "./pages/MyOffers";
import Offers from "./pages/Offers";
import EditProfile from "./pages/EditProfile/EditProfile";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={CreateProject} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/projectDesc" component={ProjectDescription} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/myInvestments" component={MyInvenstments} />
        <Route exact path="/myProjects" component={MyProjects} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/myOffers" component={MyOffers} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/EditProfile" component={EditProfile} />

         <Route  component={Error} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
