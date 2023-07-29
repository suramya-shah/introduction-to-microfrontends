// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the testing library with the extend-expect

import App from '../App';

test('renders Microfrontend 1 heading', () => {
  render(<App />);
  const headingElement = screen.queryByText('Microfrontend 1'); // Use queryByText
  expect(headingElement).toBeInTheDocument(); // Use toBeInTheDocument
});

test('renders Button component', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('renders Card component', () => {
  render(<App />);
  const cardElement = screen.queryByText('Card Title'); // Use queryByText
  expect(cardElement).toBeInTheDocument(); // Use toBeInTheDocument
});
