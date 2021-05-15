import React, { useState, useEffect, useContext, createContext } from 'react';
import { useToast } from '@chakra-ui/toast';

import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const toast = useToast();
  const [user, setUser] = useState(null);

  const warningAccountExist = () => {
    toast({
      title: 'Oppss!',
      description: 'Sepertinya Kamu telah terdaftar dengan Provider Auth lain.',
      status: 'info',
      duration: 9000,
      isClosable: true
    });
  };

  const HandleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => HandleUser(response.user))
      .catch((err) => {
        const errorCode = err.code;
        if (errorCode === 'auth/account-exists-with-different-credential')
          warningAccountExist();
        else if (errorCode === 'auth/popup-closed-by-user')
          console.log(
            'The popup has been closed by the user before finalizing the operation.'
          );
        else if (errorCode === 'auth/cancelled-popup-request')
          console.log(
            'This operation has been cancelled due to another conflicting popup being opened.'
          );
        else console.error(err);
      });
  };

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => HandleUser(response.user))
      .catch((err) => {
        const errorCode = err.code;
        if (errorCode === 'auth/account-exists-with-different-credential')
          warningAccountExist();
        else if (errorCode === 'auth/popup-closed-by-user')
          console.log(
            'The popup has been closed by the user before finalizing the operation.'
          );
        else if (errorCode === 'auth/cancelled-popup-request')
          console.log(
            'This operation has been cancelled due to another conflicting popup being opened.'
          );
        else console.error(err);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(HandleUser);
    return () => unsubscribe;
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId
  };
};
