import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import ResetButton from '../../components/ResetButton';

describe('ResetButton component', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should call function when clicked', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <ResetButton handleClick={mockFn} text="Play Again" />
    );

    expect(mockFn).toHaveBeenCalledTimes(0);

    fireEvent.click(getByRole('button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('it should render text based on "text" prop', () => {
    const { getByRole } = render(
      <ResetButton text="Play Again" handleClick={() => {}} />
    );

    expect(getByRole('button')).toHaveTextContent('Play Again');
  });
});
