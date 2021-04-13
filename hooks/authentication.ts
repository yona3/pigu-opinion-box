import firebase from 'firebase/app';
import { User } from '../models/User';
import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';

const userState = atom<User>({
  key: 'user',
  default: null,
});

export const useAuthentication = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user) return;

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);

      setUser({ uid: user.uid, isAnonymous: user.isAnonymous });
    });
  }, []);

  return { user };
};
