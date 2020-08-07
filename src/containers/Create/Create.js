import React from 'react';
import { Row, Col } from 'reactstrap';
import { AddBookForm } from '../../components';
import './style.js';

const Create = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <h3> Yeni Kitap Ekle </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <AddBookForm></AddBookForm>
        </Col>
      </Row>
    </div>
  );
};

export default Create;
