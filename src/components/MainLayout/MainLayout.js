import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import './style.js';

const MainLayout = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return <>{props.children}</>;
};

export default MainLayout;
