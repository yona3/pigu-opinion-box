import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { opinionsState } from '../store/state';
import Link from 'next/link';
import { useImage } from '../hooks/createImage';
import { useEffect } from 'react';

export default function OpinionDetail(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const opinions = useRecoilValue(opinionsState);

  useEffect(() => {
    if (!opinions || opinions.length === 0) router.push('/admin');
  }, [opinions]);

  const opinion = opinions?.filter((data) => data.id === id)[0];
  const { png } = useImage(opinion);

  return (
    <div className="text-center overflow-hidden px-5">
      {opinion && (
        <div className="max-w-xl mx-auto mt-32">
          <div>
            {png && (
              <Image
                className="rounded-md"
                alt="opinion"
                src={png}
                width="2000"
                height="1050"
              />
            )}
          </div>

          <p className="mt-2">ID: {id}</p>

          <a
            className="block mt-8"
            href={`https://twitter.com/intent/tweet?=&text=ご意見箱🗳%0a%0a%23pigu%20%23piguご意見箱`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-blue-300 text-blue-500 hover:bg-blue-100 transition rounded-md w-full py-2">
              Twitterへ移動
            </button>
          </a>
          <Link href="/admin">
            <a className="block mt-2">
              <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 transition rounded-md w-full py-2">
                もどる
              </button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
