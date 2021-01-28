import dynamic from 'next/dynamic';
import Link from 'next/link';
import FullSizeAppLayout from '../components/Layouts/FullSizeApp';
import FullConfetti from '../components/FullConfetti';

const Confetti = dynamic(() => import('react-confetti'));

const Home = () => {
  return (
    <FullSizeAppLayout>
      <FullConfetti />
      <div className="w-full h-screen px-10">
        <div className="h-full flex flex-col justify-between">
          <div className="pt-16">
            <h1 className="awesome-text text-center font-black text-6xl">Korean Now</h1>
            <h2 className="awesome-text text-center font-black">Korean Now</h2>
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
