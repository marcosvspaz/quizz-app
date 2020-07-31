import FullSizeAppLayout from './components/Layouts/FullSizeApp';
import mockData from '../mockdata';
import QuestionCard from './components/QuestionCard';
import QuizTimer from './components/QuizTimer';
import { useState } from 'react';
const { results: questions } = mockData;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const q = questions[currentQuestion];
  return (
    <FullSizeAppLayout title="Quiz">
      <div className="w-full h-screen px-10">
        <div className="h-full flex flex-col">
          <div className="py-6">
            <QuizTimer
              key={`timer-${currentQuestion}`}
              onFinish={() => setCurrentQuestion((prev) => prev + 1)}
            />
          </div>
          <div className="py-14">
            <QuestionCard
              key={`question-${currentQuestion}`}
              category={q.category}
              question={q.question}
              questionIndicator={`${currentQuestion + 1} / ${questions.length}`}
              onSelectAnswer={() => setTimeout(() => setCurrentQuestion((prev) => prev + 1), 200)}
            />
          </div>
        </div>
      </div>
    </FullSizeAppLayout>
  );
};

export default Quiz;
