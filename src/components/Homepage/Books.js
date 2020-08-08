import React from 'react';

const Books = (props) => {
  return (
    <div>
      <ul>
        {' '}
        {props.items.map((book) => (
          <li> {book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
