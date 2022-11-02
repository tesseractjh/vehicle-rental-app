import { atom } from 'recoil';
import { Segment } from '../../api/types';

export const categoryState = atom<Segment>({
  key: 'categoryState',
  default: 'ALL',
});
