import React, { useEffect, useState } from 'react';

const CodeSandBox = () => {
  const [size, setSize] = useState(getSize());
  const [msg, setMsg] = useState('SMALL');

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width < 650) {
      setMsg('SMALL');
      document.title = msg;
    } else if (size.width > 1000) {
      setMsg('LARGE');
      document.title = msg;
    } else {
      setMsg('MEDIUM');
      document.title = msg;
    }
  }, [size.width, msg]);

  return (
    <>
      <p>
        Width: {size.width}px
        <br />
        Height: {size.height}px
        <br />
        Size: {msg}
      </p>
    </>
  );
};

export default CodeSandBox;
