
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Microfrontend 1 heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Microfrontend 1');
  expect(headingElement).toBeInTheDocument();
});

test('renders Button component', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('renders Card component', () => {
  render(<App />);
  const cardElement = screen.getByText('Card Title');
  expect(cardElement).toBeInTheDocument();
});
