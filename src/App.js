import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index';

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    height: '100%'
  },
  exit: {
    opacity: 0,
    height: '100%'
  }
});

const Content = () => {
  const location = useLocation();

  return (
    <PoseGroup flipMove={false}>
      <RouteContainer key={location.pathname}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </RouteContainer>
    </PoseGroup>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App h-screen w-screen text-gray-100 font-body">
        <div className="h-full w-full">
          <Content />
        </div>
      </div>
    </Router>
  );
};

export default App;
