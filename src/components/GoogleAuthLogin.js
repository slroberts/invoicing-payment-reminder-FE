import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { useHistory } from 'react-router-dom';
import { googleAuth } from './helpers';
import Button from './Button';

const GoogleAuth = ({ isSignedIn, signIn }) => {
  const history = useHistory();

  useEffect(() => {
    googleAuth(onAuthChange);
  });

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    }
  };

  const onSignInClick = () => {
    localStorage.setItem(
      'Token',
      window.gapi.auth2.getAuthInstance().currentUser.get().getId()
    );
    window.gapi.auth2.getAuthInstance().signIn();

    setTimeout(() => {
      history.push('/dashboard');
    }, 1500);
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else {
      return (
        <Button
          buttonText='Login with Google'
          onSignInClick={onSignInClick}
          custom='bg-blue-500 hover:bg-blue-700'
        />
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn })(GoogleAuth);
