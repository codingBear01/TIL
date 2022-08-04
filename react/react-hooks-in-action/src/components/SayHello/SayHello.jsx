import React, { useState, useEffect } from 'react';

const SayHello = () => {
  const greetings = ['Hello', 'Ciao', 'Hola', 'こんにちは', '안녕하세요'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = greetings[index];
  });

  const updateGreeting = () => {
    setIndex(Math.floor(Math.random() * greetings.length));
  };

  return <button onClick={updateGreeting}>Say Hi!</button>;
};

export default SayHello;
