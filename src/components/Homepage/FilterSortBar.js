import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CategoriesComp from './CategoriesComp';
import SearchBar from './SearchBar';

const FilterSortBar = (props) => {
  return (
    <Container fluid style={{ backgroundColor: '#ecf0f1' }}>
      <Row>
        <Col xs={6}>
          <CategoriesComp />
        </Col>
        <Col xs={6}>
          <SearchBar></SearchBar>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterSortBar;
