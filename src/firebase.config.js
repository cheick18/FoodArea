
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  authDomain: "wague.com",
  projectId: "wague",
  storageBucket: "foodarea-13f32.appspot.com",
  messagingSenderId: "wague68",
  appId: "1:398edffgggdsds:web:6bf456a412e247332dbbfd",
    };
    firebase.initializeApp(firebaseConfig);
  
   const uiConfig = {
       
        signInFlow: 'popup',
        
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         
        ],
      };
      /*
      const uiConfigMail = {
       
        signInFlow: 'popup',
        
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
         
        ],
      };
   
      */
      export { firebase, uiConfig};
