import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import QuestionCard from '../components/QuestionCard';

describe('QuestionCard Component', () => {
  let TestingComponent;
  const mockOnSelectAnswerCb = jest.fn();
  const mockData = {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Unturned originally started as a Roblox game.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  };

  beforeEach(() => {
    TestingComponent = render(
      <QuestionCard
        question={mockData.question}
        questionIndicator={'1/2'}
        category={mockData.category}
        onSelectAnswer={mockOnSelectAnswerCb}
      />
    );
  });

  it('snapshot', () => {
    const tree = renderer
      .create(
        <QuestionCard
          question={mockData.question}
          questionIndicator={'1/2'}
          category={mockData.category}
          onSelectAnswer={mockOnSelectAnswerCb}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows question in the card', () => {
    const { getByText } = TestingComponent;
    const questionElement = getByText(mockData.question);
    expect(questionElement).toBeInTheDocument();
  });

  it('sends user answer to callback', () => {
    const { getByText } = TestingComponent;
    fireEvent.click(getByText('True'));

    expect(mockOnSelectAnswerCb).toBeCalledWith('True');
  });
});
