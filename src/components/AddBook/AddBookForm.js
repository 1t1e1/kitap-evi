import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { Formik } from 'formik';
import { Categories, Rating } from '../../constant';
import './style.js';

const AddBookForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          author: '',
          category: '',
          rating: '',
          publisher: '',
          description: '',
          imageUrl: '',
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="name of the book"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="name of the author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Image URL</Label>
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="url of the book's image"
                value={values.imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <Label for="publisher">Publisher</Label>
              <Input
                type="text"
                name="publisher"
                id="publisher"
                placeholder="name of the publisher"
                value={values.publisher}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {Categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input
                type="select"
                name="rating"
                id="rating"
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {Rating.map((rate) => (
                  <option key={rate}>{rate}</option>
                ))}
              </Input>
            </FormGroup>{' '}
            <Button>Add Book</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
