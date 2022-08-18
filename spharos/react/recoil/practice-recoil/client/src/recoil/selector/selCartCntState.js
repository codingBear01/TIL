import { selector } from 'recoil';
import axios from 'axios';
import { cartCountState } from './../atom/cartCountState';

export const selCartCntState = selector({
  key: 'selCartCntState',
  get: async ({ get }) => {
    const cartState = get(cartCountState);

    await axios.get('http://localhost/api/cart/1').then((res) => {
      get(res.data);
    });

    return cartState.cartCnt;
  },
});
