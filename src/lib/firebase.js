import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBgwhiXPQXwaddh7ddwyJ7lst3Vrh8ykOM',
  authDomain: 'instagram-clone-o.firebaseapp.com',
  projectId: 'instagram-clone-o',
  storageBucket: 'instagram-clone-o.appspot.com',
  messagingSenderId: '866507991797',
  appId: '1:866507991797:web:b486ef1b482fdf620933bc',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

// export const auth = app.auth();
export { firebase, FieldValue };
