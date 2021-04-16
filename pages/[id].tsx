import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { opinionsState } from '../store/state';
import { useImage } from '../hooks/createImage';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Head from 'next/head';
import { OperationButtons } from '../components/OperationButtons';

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

          <OperationButtons isReplied={isReplied} setIsReplied={setIsReplied} />
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
