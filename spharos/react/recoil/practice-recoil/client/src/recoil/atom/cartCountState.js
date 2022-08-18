import { atom } from 'recoil';

export const cartCountState = atom({
  key: 'cartCountState',
  default: {
    id: 1,
    name: 'Beckham',
    cartCnt: 3,
  },
});
