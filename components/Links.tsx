import { VFC } from 'react';
import Link from 'next/link';

export const Links: VFC = () => {
  return (
    <div className="mt-12">
      <ul className="flex justify-center">
        <li className="text-blue-500 hover:underline">
          <a
            href="http://pigu-ryu.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            pigu
          </a>
        </li>
        <span>｜</span>
        <li className="text-blue-500 hover:underline">
          <a
            href="http://twitter.com/YonaK55648609"
            target="_blank"
            rel="noopener noreferrer"
          >
            @YonaK55648609
          </a>
        </li>
        <span>｜</span>
        <li className="text-blue-500 hover:underline">
          <Link href="/terms">
            <a>利用規約</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
