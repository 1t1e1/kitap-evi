import React from 'react';
import { MainLayout } from '../index';
import './style.js';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.title}
            {...route}
            component={() => (
              <MainLayout title={route.title}>
                {' '}
                {route.component()}{' '}
              </MainLayout>
            )}
          ></Route>
        ))}
      </Switch>
    </div>
  );
};

export default Main;
