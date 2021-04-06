import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/FirebaseContext';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // if we have a user - store in LS
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we don't have an authUser
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // clean up
    return () => listener();
  }, [firebase]);

  return { user };
}
