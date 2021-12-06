import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as Yup from 'yup';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState('');
  const [serverError, setServerError] = useState(null);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('A valid email format is required.')
      .required('An email is required for this field.'),
    password: Yup.string().required('A Password is a required for this field.'),
  });

  useEffect(() => {
    formSchema.isValid(loginCredentials).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formSchema, loginCredentials]);

  const validateChange = (e) => {
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const handleChange = (e) => {
    e.persist();
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/auth/login', {
        email: loginCredentials.email,
        password: loginCredentials.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) =>
        setServerError('Invalid Login! Try again or create a new account.')
      );
  };
  return (
    <div className='mt-16'>
      <h2 className='font-semibold uppercase text-gray-400 antialiased mb-6 text-center'>
        Login
      </h2>

      <form onSubmit={handleSubmit}>
        {serverError ? (
          <p className='mx-auto mb-8 w-96 p-4 text-sm text-center rounded-full text-white bg-red-500 transition duration-1000 ease-in-out'>
            {serverError}
          </p>
        ) : null}

        <div className='shadow-lg sm:rounded-md w-96 mx-auto'>
          <div className='px-4 py-5 sm:p-6'>
            <Input
              label='Email'
              htmlfor='email'
              type='email'
              name='email'
              id='email'
              value={loginCredentials.email}
              onChange={handleChange}
              autoComplete='email'
            />
            {errors.email ? (
              <p className=' text-red-500 text-sm font-medium -mt-4 p-3'>
                {errors.email}
              </p>
            ) : null}
            <Input
              label='Password'
              htmlfor='password'
              type='password'
              name='password'
              id='password'
              value={loginCredentials.password}
              onChange={handleChange}
            />
            {errors.password ? (
              <p className=' text-red-500 text-sm font-medium -mt-4 p-3'>
                {errors.password}
              </p>
            ) : null}
            <div className='-ml-2 mb-4'>
              <Button
                buttonText='Login'
                to='/Login'
                disabled={buttonDisabled}
              />
            </div>
            <p className='text-center text-sm mt-2 clear-both'>
              Not yet registered?{' '}
              <Link to='/register' className='underline'>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
