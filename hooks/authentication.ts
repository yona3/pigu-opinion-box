import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { userState } from '../store/state';

// check is administrator
export const useAuthentication = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    if (user) return;

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);

      setUser({ uid: user.uid, isAnonymous: user.isAnonymous });
    });
  }, []);

  useEffect(() => {
    if (
      !user ||
      user.uid !== process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID ||
      user.isAnonymous
    ) {
      router.push('/');
    } else {
      router.push('/admin');
    }
  }, [user]);

  return { user };
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};
