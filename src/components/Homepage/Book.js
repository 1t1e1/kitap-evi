import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  CardSubtitle,
  Button,
} from 'reactstrap';
import StyledBook from './BookStyles';

const Book = (props) => {
  const { rating, title, author, imageUrl } = props;
  // console.log(props);
  return (
    <StyledBook>
      <Card>
        <CardImg
          top
          width="90%"
          height="250px"
          src={imageUrl}
          alt={title}
        />
        <CardBody>
          <CardText>
            <strong>{rating}/5</strong>
          </CardText>
          <CardTitle> {rating}</CardTitle>
          <CardSubtitle>{title}</CardSubtitle>
          <CardText> </CardText>
          <CardLink className="btn btn-primary float-left" href="#">
            Detail
          </CardLink>

          <CardLink className="btn btn-primary float-right" href="#">
            Edit Book
          </CardLink>
        </CardBody>
      </Card>
    </StyledBook>
  );
};

export default Book;
