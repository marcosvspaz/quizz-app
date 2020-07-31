import truncate from 'lodash/truncate';
import he from 'he';
import cn from 'classnames';
import styles from './ResultsCard.module.scss';

const truncateQuestion = (text) => truncate(text, { length: 70, separator: ' ' });

const ResultsCard = ({ questions, answers }: ResultsCardProps) => {
  return (
    <article className="bg-white rounded-lg p-4 pl-8 text-black max-h-full">
      <ol className="space-y-2 list-decimal">
        {questions.map((q, i) => {
          return (
            <li
              className={cn(
                'leading-tight break-words',
                { [styles['wrong-answer']]: q.correct_answer !== answers[i] },
                { [styles['correct-answer']]: q.correct_answer === answers[i] }
              )}
            >
              {truncateQuestion(he.decode(q.question))}
            </li>
          );
        })}
      </ol>
    </article>
  );
};

interface ResultsCardProps {
  questions?: any;
  answers?: any;
}

export default ResultsCard;
