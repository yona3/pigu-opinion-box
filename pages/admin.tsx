import { useAuthentication } from '../hooks/authentication';
import { useFetch } from '../hooks/fetchData';
import ReactLoading from 'react-loading';
import { OpinionItem } from '../components/OpinionItem';

export default function Admin(): JSX.Element {
  const { user } = useAuthentication();
  const { opinions, isFetching } = useFetch();

  return (
    <div className="text-center">
      <h1 className="text-xl mt-12">pigu｜意見箱 - 管理者ページ</h1>
      {user && <p className="mt-3 text-sm">{user.uid}</p>}
      <div>
        {opinions && <p className="mt-3 text-sm">全{opinions.length}件</p>}
      </div>
      <div className="mt-6">
        {isFetching ? (
          <ReactLoading
            className="mx-auto"
            type="spin"
            color="rgba(59, 130, 246)"
            width="32px"
            height="32px"
          />
        ) : opinions?.length > 0 ? (
          <ul className="max-w-md mx-auto">
            {opinions.map((data) => (
              <li key={data.id} className="mb-2">
                <OpinionItem opinion={data} />
              </li>
            ))}
          </ul>
        ) : (
          <p>意見は届いていません</p>
        )}
      </div>
    </div>
  );
}
