import { VFC } from 'react';
import { Opinion } from '../models/Opinion';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  opinion: Opinion;
};

export const OpinionItem: VFC<Props> = ({ opinion }) => {
  return (
    <Link href={`/${opinion.id}`}>
      <div className="border-gray-300 border rounded-md px-4 pt-6 pb-3 cursor-pointer">
        <p className="text-lg text-left">{opinion.body}</p>
        <div className="text-right mt-2">
          <small>
            {dayjs(opinion.createdAt.toDate()).format('YYYY/MM/DD HH:mm')}
          </small>
        </div>
      </div>
    </Link>
  );
};
