import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import ServerRules from './pages/ServerRules';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Play from './pages/Play';
import ScrollToTopRoute from './components/ScrollToTopRoute';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='flex-wrapper'>
          <Navbar />

          <Switch>
            <ScrollToTopRoute exact path='/' component={Home} />
            <ScrollToTopRoute
              exact
              path='/leaderboard'
              component={Leaderboard}
            />
            <ScrollToTopRoute exact path='/rules' component={ServerRules} />
            <ScrollToTopRoute exact path='/privacy' component={PrivacyPolicy} />
            <ScrollToTopRoute exact path='/play' component={Play} />
            <ScrollToTopRoute component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
