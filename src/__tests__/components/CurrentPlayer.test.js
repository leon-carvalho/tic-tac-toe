import React from 'react';

import { render } from '@testing-library/react';

import CurrentPlayer from '../../components/CurrentPlayer';

describe('CurrentPlayer component', () => {
  test('It should render the players "X" and "O"', () => {
    const { getByText } = render(<CurrentPlayer currentPlayer="X" />);

    expect(getByText('X')).toBeDefined();
    expect(getByText('O')).toBeDefined();
  });
});
