import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch} from 'react-router-dom';
import LoginFormContainer from './login/LoginFormContainer';
import SignUpContainer from './login/SignupFormContainer';
import {AuthRoute} from '../util/route_util';
import BenchIndexContainer from './benches/bench_index_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path = "/login" component={LoginFormContainer}/>
      <AuthRoute exact path = "/signup" component={SignUpContainer} />
      <Route exact path="/" component={ BenchIndexContainer } />
    </Switch>
  </div>
);

export default App;
