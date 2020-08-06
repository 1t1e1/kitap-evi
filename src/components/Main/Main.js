import React from 'react';
import './style.js';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => (
          <Route {...route}></Route>
        ))}
      </Switch>
    </div>
  );
};

export default Main;
