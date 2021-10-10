import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as Yup from 'yup';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState('');
  const [serverError, setServerError] = useState(null);

  let regex = new RegExp('^' + newUser.password + '$');

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Full Name should be a min of 6 characters')
      .required('Your full name is required for this field.'),
    email: Yup.string()
      .email('A valid email format is required.')
      .required('An email is required for this field.'),
    password: Yup.string()
      .min(6, 'Password should be a min of 6 characters.')
      .required('A Password is a required for this field.'),
    confirmPassword: Yup.string()
      .matches(regex, 'Password does not match.')
      .required(),
  });

  useEffect(() => {
    formSchema.isValid(newUser).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formSchema, newUser]);

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
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/auth/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => setServerError('User already exists. Please login!'));
  };

  return (
    <div className='mt-16'>
      <h2 className='font-semibold uppercase text-gray-400 antialiased mb-6 text-center'>
        Create An Account
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
              label='Full Name'
              htmlfor='name'
              type='text'
              name='name'
              id='name'
              value={newUser.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <p className=' text-red-500 text-sm font-medium -mt-4 p-3'>
                {errors.name}
              </p>
            ) : null}
            <Input
              label='Email'
              htmlfor='email'
              type='email'
              name='email'
              id='email'
              value={newUser.email}
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
              value={newUser.password}
              onChange={handleChange}
            />
            {errors.password ? (
              <p className=' text-red-500 text-sm font-medium -mt-4 p-3'>
                {errors.password}
              </p>
            ) : null}
            <Input
              label='Confirm Password'
              htmlfor='confirmPassword'
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={newUser.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword ? (
              <p className=' text-red-500 text-sm font-medium -mt-4 p-3'>
                {errors.confirmPassword}
              </p>
            ) : null}
            <Button
              buttonText='Creat An Account'
              custom='bg-blue-500 hover:bg-blue-700 w-full mb-2'
              to='/Login'
              disabled={buttonDisabled}
            />
            <p className='text-center text-sm mt-2'>
              Already registered?{' '}
              <Link to='/login' className='underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
