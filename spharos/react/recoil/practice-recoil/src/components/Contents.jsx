import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartCountState } from '../recoil/atom/cartCountState';

export const Contents = () => {
  // const [myCart, setMyCart] = useRecoilState(cartCountState);
  // const handleCartCnt = () => {
  //   setMyCart({
  //     ...myCart,
  //     cartCnt: myCart.cartCnt + 1,
  //   });
  // };
  const currCnt = useRecoilValue(cartCountState);
  const cntHandler = useSetRecoilState(cartCountState);

  const handleCartCnt = () => {
    cntHandler((prev) => ({
      ...prev,
      cartCnt: prev.cartCnt + 1,
    }));
  };

  return (
    <div className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>신나능 Recoil 시간~</Card.Title>
          <Card.Text>Recoil을 다같이 눈뉴냔냐 배워보자늉~ㅇㅅㅇ//</Card.Text>
          <Card.Text>현재 담긴 상품 개수는 {currCnt.cartCnt}개입니다</Card.Text>
          <Button variant="primary" onClick={handleCartCnt}>
            Add to CartCnt
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
