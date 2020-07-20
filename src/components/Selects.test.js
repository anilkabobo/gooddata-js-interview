// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import Selects from './Selects';
import { fireEvent, render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Selects />, div);
});

it('fires month change event', () => {
  const mockMonthChange = jest.fn();

  const { getByTestId, getByDisplayValue } = render(
    <Selects handleMonthChange={mockMonthChange} />,
  );

  const select = getByTestId('selectMonth');

  expect(getByDisplayValue('January')).toBeTruthy();

  expect(select).toBeTruthy();

  fireEvent.change(select, { target: { value: '2' } });

  expect(getByDisplayValue('March')).toBeTruthy();
  expect(mockMonthChange).toHaveBeenCalledTimes(1);
});

it('fires month change event', () => {
  const mockYearChange = jest.fn();

  const { getByTestId, getByDisplayValue } = render(
    <Selects handleYearChange={mockYearChange} />,
  );

  const select = getByTestId('selectYear');

  expect(getByDisplayValue('2015')).toBeTruthy();

  expect(select).toBeTruthy();

  fireEvent.change(select, { target: { value: '2017' } });

  expect(getByDisplayValue('2017')).toBeTruthy();

  expect(mockYearChange).toHaveBeenCalledTimes(1);
});
