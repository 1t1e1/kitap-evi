import React from 'react';
import { useSelector } from 'react-redux';
import { Books } from '../../components';
import './style.js';

const Homepage = (props) => {
  const books = useSelector((state) => state.books.data);
  return (
    <div>
      This is home page
      <Books items={books}></Books>
    </div>
  );
};
export default Homepage;
