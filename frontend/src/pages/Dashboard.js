import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';
import { useHistory } from 'react-router-dom';
import { googleAuth } from '../components/helpers';
import Button from '../components/Button';
import AddClientImg from '../images/undraw_fill_in_mie5.svg';

const Dashboard = ({ isSignedIn }) => {
  const history = useHistory();
  useEffect(() => {
    googleAuth(onAuthChange);
  });

  const onAuthChange = () => {
    if (isSignedIn) {
      signOut();
    }
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
    localStorage.removeItem('Token');
    history.push('/');
  };
  return (
    <div>
      <Button
        buttonText='Log Out'
        onSignInClick={onSignOutClick}
        custom='md:absolute top-8 right-8 -mt-2 md:mt-0 bg-black hover:bg-gray-500'
      />

      {/* Headline component */}
      <p className='text-xl text-gray-400 mt-16'>
        Add Client To Generate Invoice
      </p>

      {/* Add client component */}
      <div className='mt-16 text-center w-full pb-16 md:pb-0'>
        <img src={AddClientImg} alt='' className='w-2/5 m-auto opacity-40' />
        <Button buttonText='Add Client' custom='bg-black mt-16' />
      </div>

      {/* Client List component */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut })(Dashboard);
