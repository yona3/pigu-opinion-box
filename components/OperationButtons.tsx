import Link from 'next/link';
import firebase from 'firebase/app';
import { Dispatch, SetStateAction, VFC } from 'react';
import { NextRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { opinionsState } from '../store/state';

type Props = {
  router: NextRouter;
  isReplied: boolean;
  setIsReplied: Dispatch<SetStateAction<boolean>>;
};

export const OperationButtons: VFC<Props> = ({
  router,
  isReplied,
  setIsReplied,
}) => {
  const [opinions, setOpinions] = useRecoilState(opinionsState);
  const id = router.query.id as string;
  const siteUrl = 'https://pigu-opinion-box.vercel.app';

  const deleteOpinion = () => {
    const result = confirm('削除しますか？');

    if (!result) return;

    // delete
    firebase
      .firestore()
      .collection('opinions')
      .doc(id)
      .delete()
      .then(() => {
        setOpinions(opinions.filter((item) => item.id !== id));
        router.push('/admin');
      })
      .catch((err) => console.error(err));
  };

  const handleChangeIsReplied = () => {
    // update: opinion.isReplied
    firebase
      .firestore()
      .collection('opinions')
      .doc(id)
      .update({ isReplied: !isReplied })
      .then(() => {
        setOpinions(
          opinions.map((item) => {
            if (item.id !== id) return item;

            // new object
            const newOpinion = { ...item };
            newOpinion.isReplied = !isReplied;

            return newOpinion;
          })
        );

        setIsReplied(!isReplied);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mt-8">
      <a
        href={`https://twitter.com/intent/tweet?url=${siteUrl}&text=ご意見箱🗳%0a%0a%23pigu%20%23piguご意見箱%0A`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-sm focus:outline-none bg-blue-500 text-white hover:bg-blue-400 transition rounded-md w-full py-3">
          Twitterへ移動
        </button>
      </a>

      <div className="flex mt-2 space-x-1">
        <button
          className="border focus:outline-none text-sm w-full border-green-300 text-green-500 hover:bg-green-100 transition rounded-md py-2.5"
          onClick={handleChangeIsReplied}
        >
          {isReplied ? '未回答にする' : '回答済みにする'}
        </button>

        <button
          className="border focus:outline-none text-sm border-red-300 text-red-500 hover:bg-red-100 transition rounded-md w-full py-2.5"
          onClick={deleteOpinion}
        >
          削除する
        </button>
      </div>

      <Link href="/admin">
        <a className="block mt-2">
          <button className="border focus:outline-none text-sm border-gray-300 text-gray-800 hover:bg-gray-100 transition rounded-md w-full py-2.5">
            もどる
          </button>
        </a>
      </Link>
    </div>
  );
};
