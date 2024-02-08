import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './globals.css';

function form() {
  return (
    <Formik
      initialValues={{ email: '', password: '', phone: '', location: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string()
          .required('Phone Number required')
          .min(10, 'please enter min 10 digits')
          .max(10, 'please eneter max 10 digits '),
        location: Yup.string().required('Location Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (
            values.email === 'ashok@gmail.com' &&
            values.password === '12345'
          ) {
            console.log('Login successful!');
            // Additional actions like redirecting or setting authentication state can be done here
          } else {
            console.log('Invalid email or password');
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <h2>Login</h2>
        <div className="element">
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div className="element">
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div className="element">
          <label htmlFor="phone">PhoneNumber:</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
        <div className="element">
          <label htmlFor="location">Location:</label>
          <Field type="text" id="location" name="location" />
          <ErrorMessage name="location" component="div" className="error" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default form;
