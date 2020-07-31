import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import FullSizeAppLayout from './components/Layouts/FullSizeApp';
import ResultsCard from './components/ResultsCard';
import FullConfetti from './components/FullConfetti';
import { QuizContext } from '../contexts/quiz';

const Results = () => {
  const [state, dispatch] = useContext(QuizContext);
  const { questions, answers } = state;

  const correctAnswersCount =
    questions && questions.map((q, i) => q.correct_answer === answers[i]).filter(Boolean).length;

  return (
    <FullSizeAppLayout title="Results">
      <FullConfetti isOnce={true} />
      <div className="w-full min-h-screen px-10">
        <div className="h-full flex flex-col">
          <div className="py-3">
            <p className="text-center font-bold text-xl">Score: {correctAnswersCount}/10</p>
          </div>
          <div className="py-3">
            <ResultsCard questions={questions} answers={answers} />
          </div>
          <div className="flex justify-center py-10">
            <Link href="/">
              <a className="btn btn-accent">Play Again</a>
            </Link>
          </div>
        </div>
      </div>
    </FullSizeAppLayout>
  );
};

export default Results;
