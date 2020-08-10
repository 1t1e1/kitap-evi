import React from 'react';
import { Homepage, Detail, Create } from './containers';

const routes = [
  {
    path: '/detail/:id',
    exact: true,
    component: Detail,
    // title used as a map react keys
    title: 'Book Detail',
  },
  {
    path: '/create',
    exact: true,
    component: Create,
    title: 'Create New Book',
  },
  {
    path: '/',
    exact: true,
    component: Homepage,
    title: 'Kitap Evi App',
  },
  {
    path: '/',
    component: () => <div> This page is not found</div>,
    title: 'Empty Page',
  },
];

export default routes;
