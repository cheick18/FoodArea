import React, { useState, useEffect } from 'react';
import firebase from './firebase'; // Assurez-vous de spécifier le bon chemin vers votre fichier firebase.js
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const FirebaseUIComponent = ({ showUI, onClose }) => {
  useEffect(() => {
    if (showUI) {
      const uiConfig = {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // Code à exécuter après une connexion réussie
          return true;
        },
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          // Ajoutez d'autres fournisseurs si nécessaire
        ],
      };

      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, [showUI]);

  // Fermer le formulaire FirebaseUI si besoin
  useEffect(() => {
    return () => {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.reset();
    };
  }, []);

  return (
    <div style={{ display: showUI ? 'block' : 'none' }}>
      <div id="firebaseui-auth-container"></div>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

const VotreComposant = () => {
  const [showUI, setShowUI] = useState(false);

  const handleInscriptionClick = () => {
    setShowUI(true);
  };

  const handleConnectionClick = () => {
    setShowUI(true);
  };

  const handleCloseUI = () => {
    setShowUI(false);
  };

  return (
    <div>
      {/* Autres éléments de votre composant */}
      <button onClick={handleInscriptionClick}>Inscription</button>
      <button onClick={handleConnectionClick}>Connexion</button>

      <FirebaseUIComponent showUI={showUI} onClose={handleCloseUI} />
      {/* Autres éléments de votre composant */}
    </div>
  );
};

export default VotreComposant;
