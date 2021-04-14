import { atom } from 'recoil';
import { Opinion } from '../models/Opinion';
import { User } from '../models/User';

export const opinionsState = atom<Opinion[]>({
  key: 'questions',
  default: null,
});

export const userState = atom<User>({
  key: 'user',
  default: null,
});
