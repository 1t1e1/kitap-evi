import React, { useEffect } from 'react';

const Books = (props) => {
  useEffect(() => {
    console.log(props.items);
  }, []);
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
