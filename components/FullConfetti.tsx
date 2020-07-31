import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Confetti = dynamic(() => import('react-confetti'));

const FullConfetti = ({ isOnce }: FullConfettiProps) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
  });
  return (
    <Confetti width={width} height={height} numberOfPieces={isOnce ? 500 : 200} recycle={!isOnce} />
  );
};

interface FullConfettiProps {
  isOnce?: boolean;
}

export default FullConfetti;
