import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

test('SPINNER TEST', () => {
   const { asFragment } = render(<Spinner />);
   expect(screen.getByTestId('containerdiv')).toBeInTheDocument();
   expect(screen.getByTestId('spindiv')).toBeInTheDocument();
   expect(asFragment()).toMatchSnapshot();
});
