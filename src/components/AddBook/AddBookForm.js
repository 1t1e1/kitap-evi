import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  FormFeedback,
} from 'reactstrap';
import { Formik } from 'formik';
import { Categories, Rating } from '../../constant';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addBook } from './../../state/ducks/books/actions';
import './style.js';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Title is required field'),
  author: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  publisher: Yup.string()
    .min(4, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  imageUrl: Yup.string()
    .min(4, 'Too Short!')
    .max(150, 'Too Long!')
    .url('Url is not valid'),
  // description: Yup.string().email('Invalid email').required('Required'),
});

const AddBookForm = (props) => {
  const dispatch = useDispatch();
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
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(addBook(values));
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
                invalid={errors.title && touched.title}
              />
              {errors.title && touched.title ? (
                <FormFeedback>{errors.title}</FormFeedback>
              ) : null}
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
                invalid={errors.author && touched.author}
              />
              {errors.author && touched.author ? (
                <FormFeedback>{errors.author}</FormFeedback>
              ) : null}
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
                invalid={errors.imageUrl && touched.imageUrl}
              />
              {errors.imageUrl && touched.imageUrl ? (
                <FormFeedback>{errors.imageUrl}</FormFeedback>
              ) : null}
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
                invalid={errors.publisher && touched.publisher}
              />
              {errors.publisher && touched.publisher ? (
                <FormFeedback>{errors.publisher}</FormFeedback>
              ) : null}
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
