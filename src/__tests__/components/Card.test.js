import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Card from '../../components/Card';

describe('Card component', () => {
  test('it should show player inside', () => {
    const { getByText } = render(<Card player="X" handleClick={() => {}} />);

    expect(getByText('X')).toBeDefined();
  });

  test('it should be disabled when receive this props as true', () => {
    const { getByTestId } = render(<Card disabled handleClick={() => {}} />);

    expect(getByTestId('card-game')).toBeDisabled();
  });

  test('it should call function correctly', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Card handleClick={mockFn} />);

    fireEvent.click(getByTestId('card-game'));

    expect(mockFn).toHaveBeenCalled();
  });
});
