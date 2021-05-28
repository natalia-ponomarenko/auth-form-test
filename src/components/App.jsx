import React from 'react';
import LogInCard from '@components/LogInCard';
import SignInPage from '../SignUpPage/SignUpPage';
import RestorePasswordPage from '../RestorePassword/RestorePasswordPage';
import '@styles/main.scss';

const App = () => (
  <div className="container">
    <LogInCard />
    <SignInPage />
    <RestorePasswordPage />
  </div>
);

export default App;
