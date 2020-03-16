import React from 'react';

import { render, cleanup } from '@testing-library/react';

import Header from '../../components/Header';

describe('Header component', () => {
  afterEach(() => {
    cleanup();
  });

  test('it should show "X" Wins amount', () => {
    const { getByText } = render(
      <Header oWinsAmount={0} xWinsAmount={5} drawsAmount={0} />
    );

    expect(getByText('5 wins')).toBeDefined();
  });

  test('it should show "O" Wins amount', () => {
    const { getByText } = render(
      <Header oWinsAmount={3} xWinsAmount={0} drawsAmount={0} />
    );

    expect(getByText('3 wins')).toBeDefined();
  });

  test('it should show draws amount', () => {
    const { getByText } = render(
      <Header oWinsAmount={0} xWinsAmount={0} drawsAmount={10} />
    );

    expect(getByText('10 draws')).toBeDefined();
  });
});
