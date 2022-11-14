import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers();
})

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
})

test('renders learn react link', async () => {
  render(<App />);
  act(() => { 
    jest.runAllTimers();
  })
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
