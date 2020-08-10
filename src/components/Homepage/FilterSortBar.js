import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CategoriesComp from './CategoriesComp';

const FilterSortBar = (props) => {
  return (
    <Container fluid style={{ backgroundColor: '#ecf0f1' }}>
      <Row>
        <Col xs={6}>
          <CategoriesComp />
        </Col>
        <Col xs={6}> right</Col>
      </Row>
    </Container>
  );
};

export default FilterSortBar;
