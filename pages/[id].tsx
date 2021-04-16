import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { opinionsState } from '../store/state';
import Link from 'next/link';
import { useImage } from '../hooks/createImage';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Head from 'next/head';

export default function OpinionDetail(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const opinions = useRecoilValue(opinionsState);

  useEffect(() => {
    if (!opinions || opinions.length === 0) router.push('/admin');
  }, [opinions]);

  const opinion = opinions?.filter((data) => data.id === id)[0];
  const [isReplied, setIsReplied] = useState<boolean>(opinion?.isReplied);
  const { png } = useImage(opinion);

  const deleteOpinion = () => {
    const result = confirm('削除しますか？');

    if (!result) return;

    console.log('delete.');
  };

  const handleChangeIsReplied = () => {
    setIsReplied((c) => !c);
    // update data
    console.log('update.');
  };

  return (
    <div className="text-center overflow-hidden px-5">
      {opinion && png ? (
        <div className="max-w-xl mx-auto mt-32">
          <Head>
            <title>{opinion.body}</title>
          </Head>
          <div>
            <Image
              className="rounded-md"
              alt="opinion"
              src={png}
              width="2000"
              height="1050"
            />
          </div>

          <table className="w-full mt-5">
            <tbody>
              <tr>
                <td className="py-2 text-sm border border-gray-300">ID</td>
                <td className="py-2 text-sm border border-gray-300">{id}</td>
              </tr>
              <tr>
                <td className="py-2 text-sm border border-gray-300">STATE</td>
                <td className="py-2 text-sm border border-gray-300">
                  {isReplied ? '回答済み' : '未回答'}
                </td>
              </tr>
            </tbody>
          </table>

          <a
            className="block mt-8"
            href={`https://twitter.com/intent/tweet?=&text=ご意見箱🗳%0a%0a%23pigu%20%23piguご意見箱`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border text-sm border-blue-300 text-blue-500 hover:bg-blue-100 transition rounded-md w-full py-2.5">
              Twitterへ移動
            </button>
          </a>

          <div className="flex mt-2 space-x-2">
            <button
              className="border text-sm w-full border-green-300 text-green-500 hover:bg-green-100 transition rounded-md py-2.5"
              onClick={handleChangeIsReplied}
            >
              {isReplied ? '未回答にする' : '回答済みにする'}
            </button>

            <button
              className="border text-sm border-red-300 text-red-500 hover:bg-red-100 transition rounded-md w-full py-2.5"
              onClick={deleteOpinion}
            >
              削除する
            </button>
          </div>

          <Link href="/admin">
            <a className="block mt-2">
              <button className="border text-sm border-gray-300 text-gray-800 hover:bg-gray-100 transition rounded-md w-full py-2.5">
                もどる
              </button>
            </a>
          </Link>
        </div>
      ) : (
        <ReactLoading
          className="mx-auto mt-48"
          type="spin"
          color="rgba(59, 130, 246)"
          width="32px"
          height="32px"
        />
      )}
    </div>
  );
}
