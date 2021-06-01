import LogInCard from '@components/LogInPage/LogInCard';
import '@styles/main.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RestorePasswordPage from './RestorePasswordPage/RestorePasswordPage';
import SignInPage from './SignUpPage/SignUpPage';

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/home">
        <LogInCard />
      </Route>
      <Route path="/sign">
        <SignInPage />
      </Route>
      <Route path="/restore">
        <RestorePasswordPage />
      </Route>
    </Switch>
  </div>
);

export default App;
