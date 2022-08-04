import React, { useEffect, useState } from 'react';

const WindowSize = () => {
  const [size, setSize] = useState(getSize());

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

  return (
    <>
      <p>
        Width: {size.width}, Height: {size.height}
      </p>
    </>
  );
};

export default WindowSize;
