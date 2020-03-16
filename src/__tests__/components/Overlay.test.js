import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Overlay from '../../components/Overlay';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should show message based on props "message"', () => {
    const { getByText } = render(
      <Overlay message="Test Message" handleClick={() => {}} />
    );

    expect(getByText(/test message/i)).toBeDefined();
  });

  test('it should call function when button be clicked', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <Overlay handleClick={mockFn} message="Test Message" />
    );

    expect(mockFn).toHaveBeenCalledTimes(0);

    fireEvent.click(getByRole('button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
