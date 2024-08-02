import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';

const LoginForm = ({ onSubmit }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label htmlFor="email">Email</BootstrapForm.Label>
            <Field
              type="email"
              name="email"
              as={BootstrapForm.Control}
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component={Alert} variant="danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label htmlFor="password">Password</BootstrapForm.Label>
            <Field
              type="password"
              name="password"
              as={BootstrapForm.Control}
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component={Alert} variant="danger" />
          </BootstrapForm.Group>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
