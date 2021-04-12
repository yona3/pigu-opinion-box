import { KeyboardEvent, ChangeEvent, FormEvent, useState, VFC } from 'react';

export const Form: VFC = () => {
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const blockEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) =>
    e.code === 'Enter' && e.preventDefault();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-8 px-2 text-center">
      <p>匿名でpiguへの意見を送る</p>
      <form
        className="max-w-sm mx-auto mt-4 flex flex-col"
        onSubmit={handleSubmit}
      >
        <textarea
          className="border-2 h-52 sm:h-64 border-gray-300 rounded-md outline-none resize-none p-2 text-base sm:text-lg"
          value={text}
          placeholder="本文を入力"
          onChange={handleChangeText}
          onKeyDown={blockEnterKey}
        />
        <span className="text-right text-sm mt-1 mr-2">
          {text.length} / 100
        </span>
        <button className="mt-1 mx-auto py-2 w-28 focus:outline-none text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-400 hover:border-blue-500 transition rounded-md">
          意見を送る
        </button>
      </form>
    </div>
  );
};
