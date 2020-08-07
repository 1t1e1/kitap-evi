import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import './style.js';

const MainLayout = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return <Container>{props.children}</Container>;
};

export default MainLayout;
