import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home';

test('should check Home', () => {
   render(<Home />);
   expect(screen.getByTestId('home')).toBeInTheDocument();
});

test('should Home matches snapshot', () => {
   const { asFragment } = render(<Home />);
   expect(asFragment()).toMatchSnapshot();
});
