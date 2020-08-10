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
import { Link as RRLink } from 'react-router-dom';
import StyledBook from './BookStyles';

const Book = (props) => {
  const { rating, title, author, imageUrl, description, id } = props;
  let descShort = description ? description.slice(0, 100) : null;
  console.log(descShort);
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
            <strong>{rating} / 5</strong>
          </CardText>
          <CardTitle>
            {title} by {author}{' '}
          </CardTitle>
          {/* <CardSubtitle> */}
          {/* </CardSubtitle> */}
          <CardText>{descShort} ...</CardText>
          <CardLink
            tag={RRLink}
            className="btn btn-primary float-left"
            to={`/detail/${id}`}
          >
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
