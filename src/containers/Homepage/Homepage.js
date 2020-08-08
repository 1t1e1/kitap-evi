import React from 'react';
import { connect } from 'react-redux';
import { Books } from '../../components';
import './style.js';

const Homepage = (props) => {
  return (
    <div>
      This is home page
      <Books items={props.books}></Books>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { books: state.books.data };
};

export default connect(mapStateToProps)(Homepage);
