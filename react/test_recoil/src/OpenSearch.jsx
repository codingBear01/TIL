import React from 'react';
import { useRecoilState } from 'recoil';
import { isOpenState } from './recoil/isOpen';

const OpenSearch = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <input type="text" style={{ display: isOpen ? '' : 'none' }} />
      <button type="button" onClick={() => handleClick()}>
        {isOpen ? '닫힘' : '열림'}
      </button>
    </>
  );
};

export default OpenSearch;
