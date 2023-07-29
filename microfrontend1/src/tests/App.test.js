
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders microfrontend app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Microfrontend App 1/i);
  expect(titleElement).toBeInTheDocument();
});
