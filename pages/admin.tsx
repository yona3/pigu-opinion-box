import { useAuthentication } from '../hooks/authentication';

export default function Admin(): JSX.Element {
  const { user } = useAuthentication();

  return (
    <div>
      <h1>admin page</h1>
      <p>uid: {user.uid}</p>
      <div>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
}
