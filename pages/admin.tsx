import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthentication } from '../hooks/authentication';

export default function Admin(): JSX.Element {
  const router = useRouter();
  const { user } = useAuthentication();

  useEffect(() => {
    if (
      !user ||
      user.uid !== process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID ||
      user.isAnonymous
    )
      router.push('/');
  }, [user]);

  return (
    <div>
      <h1>admin page</h1>
      <div>
        answer answer answer answer answer answer answer answer answer answer
        answer answer
      </div>
    </div>
  );
}
