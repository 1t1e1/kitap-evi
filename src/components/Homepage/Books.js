import React from 'react';
import { Book } from './index';
import { Row, Col } from 'reactstrap';

const Books = (props) => {
  return (
    <Row>
      {props.items.map((book) => (
        <Col sm={3}>
          <Book {...book}> </Book>
        </Col>
      ))}
    </Row>
  );
};

export default Books;
