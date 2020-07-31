import dynamic from 'next/dynamic';
import Link from 'next/link';
import FullSizeAppLayout from './components/Layouts/FullSizeApp';
import { useState, useEffect, useRef } from 'react';

const Confetti = dynamic(() => import('react-confetti'));

const Home = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    const { offsetWidth, offsetHeight } = containerEl as HTMLElement;
    setWidth(offsetWidth);
    setHeight(offsetHeight);
  });

  return (
    <FullSizeAppLayout>
      <Confetti width={width} height={height} />
      <div className="w-full h-screen px-10" ref={containerRef}>
        <div className="h-full flex flex-col justify-between">
          <div className="pt-16">
            <h1 className="awesome-text text-center font-black text-6xl">10Q</h1>
          </div>
          <div className="font-bold text-lg text-center">
            <p className="mb-14">You will be presented with 10 questions</p>
            <p>Can you score 100% !?</p>
          </div>
          <div className="flex justify-center py-10">
            <Link href="/quiz">
              <a className="btn btn-accent">Begin</a>
            </Link>
          </div>
        </div>
      </div>
    </FullSizeAppLayout>
  );
};

export default Home;
