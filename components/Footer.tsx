import { VFC } from 'react';

export const Footer: VFC = () => {
  return (
    <footer className="w-full text-center py-4 absolute bottom-0 border-t-2 border-gray-300 bg-white">
      twitter
      <a
        className="ml-1 text-blue-500"
        href="http://twitter.com/pigu73190018"
        target="_blank"
        rel="noopener noreferrer"
      >
        @pigu73190018
      </a>
    </footer>
  );
};
