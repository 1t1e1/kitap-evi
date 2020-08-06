import React from 'react';
import { Homepage, Detail, Create } from './containers';

const routes = [
  {
    path: '/detail/:id',
    exact: true,
    component: Detail,
    // render: () => <div> aa</div>,
  },
  {
    path: '/create',
    exact: true,
    component: Create,
    // render: () => <div> aa</div>,
  },
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/',
    // exact: true,
    render: () => <div> This page is not found</div>,
  },
];

export default routes;
