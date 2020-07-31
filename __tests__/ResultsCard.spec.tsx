import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResultsCard from '../components/ResultsCard';
import mockData from '../mockdata';

describe('ResultsCard Component', () => {
  const { results: mockQuestions } = mockData;
  const mockAnswers = mockQuestions.map((q, i) =>
    i % 2 == 0 ? q.correct_answer : q.incorrect_answers[0]
  );

  it('snapshot', () => {
    const tree = renderer
      .create(<ResultsCard questions={mockQuestions} answers={mockAnswers} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
