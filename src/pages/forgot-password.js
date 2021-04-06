import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import * as ROUTES from '../constants/routes';

export default function ForgotPassword() {
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const isInvalid = emailAddress === '';

  const handleReset = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(emailAddress);
      setMessage('Check your inbox for further instructions');
    } catch (err) {
      setEmailAddress('');
      setError(err.message);
    }
  };

  useEffect(() => {
    document.title = 'Password Reset - Instagram Clone';
  }, []);

  return (
    <>
      <header className='h-16 bg-white border-b border-gray-primary'>
        <div className='container mx-auto max-w-screen-lg h-full'>
          <div className='flex justify-between h-full'>
            <div className='text-gray-700 text-center flex items-center align-items cursor-pointer'>
              <h1 className='flex justify-center w-full'>
                <Link to={ROUTES.LOGIN} aria-label='Instagram Clone logo'>
                  <img
                    src='/images/logo.png'
                    alt='Instagram Clone'
                    className='mt-2 w-6/12'
                  />
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className='container flex mx-auto max-w-screen-md items-center mt-20'>
        <div className='mx-auto'>
          <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
            <h1 className='flex justify-center w-full mb-2'>
              <p>Trouble Logging In?</p>
            </h1>

            {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}
            {message && (
              <div
                className='flex items-center text-blue-medium text-sm font-bold px-4 py-3'
                role='alert'
              >
                <p>{message}</p>
              </div>
            )}
            <form onSubmit={handleReset} method='POST'>
              <input
                aria-label='Enter your email address'
                type='text'
                placeholder='Email address'
                className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />
              <button
                disabled={isInvalid}
                type='submit'
                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
              >
                Reset password
              </button>
            </form>
            <p className='mt-3 text-sm'>
              <Link to={ROUTES.SIGN_UP}>Create New Account</Link>
            </p>
          </div>
          <div className='flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary'>
            <p className='text-sm'>
              <Link to={ROUTES.LOGIN} className='font-bold text-blue-medium'>
                Back To Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
