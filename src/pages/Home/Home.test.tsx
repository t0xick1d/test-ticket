import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('check Home', () => {
   render(<Home />);
   expect(screen.getByTestId('home')).toBeInTheDocument();
});

test('Home matches snapshot', () => {
   const { asFragment } = render(<Home />);
   expect(asFragment()).toMatchSnapshot();
});
