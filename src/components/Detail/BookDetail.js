import React from 'react';
import { CardImg } from 'reactstrap';

export default function BookDetail({
  title,
  author,
  category,
  rating,
  publisher,
  description,
  imageUrl,
}) {
  return (
    <div>
      <h3> Title : {title}</h3>
      <h3> Author : {author}</h3>
      <h3> category : {category}</h3>
      <h3> rating: {rating}</h3>
      <h3> publisher: {publisher}</h3>
      <p>{description}</p>
      <img src={imageUrl} />
    </div>
  );
}
