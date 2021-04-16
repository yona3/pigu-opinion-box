import Link from 'next/link';

export const OperationButtons = ({ isReplied, setIsReplied }) => {
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
    <div className="mt-8">
      <a
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
  );
};
