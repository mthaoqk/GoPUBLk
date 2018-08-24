import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import CreateProject from "./pages/CreateProject/CreateProject";
// import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search//Search";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectDescription from "./pages/ProjectDesc/ProjectDesc";
import Error from "./pages/404/404";
import Results from "./pages/Results/Results";
import MyInvestments from "./pages/MyInvestments/MyInvestments";
import MyOffers from "./pages/MyOffers/MyOffers";
import Offers from "./pages/Offers/Offers";
import MyProjects from "./pages/MyProjects/MyProjects";
import Favorites from "./pages/Favorites/Favorites";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/create" component={CreateProject} /> */}
        <Route exact path="/search" component={Search} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/projectDesc" component={ProjectDescription} />
        <Route exact path="/myInvestments" component={MyInvestments} />
        <Route exact path="/myProjects" component={MyProjects} />
        <Route exact path="/myoffers" component={MyOffers} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/favorites" component={Favorites} />


         <Route  component={Error} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
