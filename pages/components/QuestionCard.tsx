import unescape from 'lodash/unescape';

const QuestionCard = ({
  category,
  question,
  questionIndicator,
  onSelectAnswer,
}: QuestionCardProps) => {
  return (
    <article className="flex flex-col justify-evenly bg-white rounded-lg p-5 text-black text-center">
      <div className="pb-8">
        <small className="text-gray-400 font-bold mb-3">{questionIndicator}</small>
        <br />
        <small className="text-gray-600">{category}</small>
        <h1 className="leading-tight font-semibold sm:text-3xl text-xl">{unescape(question)}</h1>
      </div>
      <div className="h-full flex flex-col justify-between space-y-5">
        <div>
          <button className="btn-quiz" onClick={() => onSelectAnswer('True')}>
            True
          </button>
        </div>
        <div>
          <button className="btn-quiz" onClick={() => onSelectAnswer('False')}>
            False
          </button>
        </div>
      </div>
    </article>
  );
};

interface QuestionCardProps {
  category: string;
  question: string;
  questionIndicator: string;
  onSelectAnswer: Function;
}

export default QuestionCard;
