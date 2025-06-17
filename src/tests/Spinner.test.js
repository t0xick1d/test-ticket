import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner/Spinner';

describe('Filter snapshot', () => {
   it('should render spinner container', () => {
      render(<Spinner />);
      expect(screen.getByTestId('containerdiv')).toBeInTheDocument();
   });
   it('should render spinner spinerdiv', () => {
      render(<Spinner />);

      expect(screen.getByTestId('spindiv')).toBeInTheDocument();
   });
   it('should matche snapshot', () => {
      const { asFragment } = render(<Spinner />);
      expect(asFragment()).toMatchSnapshot();
   });
});
