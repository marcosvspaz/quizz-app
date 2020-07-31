import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import QuizTimer from '../components/QuizTimer';

describe('QuizTimer Component', () => {
  const mockDefaultTimer = 6;
  const mockOnFinishCb = jest.fn();

  it('snapshot', () => {
    const tree = renderer.create(<QuizTimer onFinish={mockOnFinishCb} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('starts with default timer', () => {
    const TestingComponent = render(
      <QuizTimer onFinish={mockOnFinishCb} defaultTimer={mockDefaultTimer} />
    );
    const { getByText } = TestingComponent;
    const timeIndicatorElement = getByText(mockDefaultTimer.toString());
    expect(timeIndicatorElement).toBeInTheDocument();
  });
});
