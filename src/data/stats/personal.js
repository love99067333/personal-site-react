import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-04-02T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: '現齡',
    value: <Age />,
  },
  {
    key: 'countries',
    label: '造訪國家',
    value: 2,
    link:
      '',
  },
  {
    key: 'location',
    label: '現居',
    value: '台灣, 台南',
  },
];

export default data;
