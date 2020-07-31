import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Confetti = dynamic(() => import('react-confetti'));

const FullConfetti = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
  });
  return <Confetti width={width} height={height} />;
};

export default FullConfetti;
