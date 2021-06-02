import LogInCard from '@components/LogInPage/LogInCard';
import '@styles/main.scss';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestorePasswordPage from './RestorePasswordPage/RestorePasswordPage';
import SignInPage from './SignUpPage/SignUpPage';

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/home">
        <LogInCard />
      </Route>
      <Route exact path="/sign">
        <SignInPage />
      </Route>
      <Route exact path="/restore">
        <RestorePasswordPage />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  </div>
);

export default App;
