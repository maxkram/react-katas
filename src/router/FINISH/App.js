import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Loading from "./Loading";
import ErrorBoundary from "./ErrorBoundary";
const Home = React.lazy(() => import("./Home"));
const Projects = React.lazy(() => import("./Projects"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
