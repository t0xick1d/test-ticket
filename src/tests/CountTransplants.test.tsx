import { render, screen, fireEvent } from '@testing-library/react';
import CountTransplants from '../components/CountTransplants/CountTransplants';
import { TransplantsI } from '../types/TicketsInterface';

describe('CountTransplants component', () => {
   const mockTransplants: TransplantsI = {
      all: false,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   };

   const mockSetTransplants = jest.fn();

   it('should renders all checkbox with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('Все')).toBeInTheDocument();
   });

   it('should renders noneTransplants checkbox with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('Без пересадок')).toBeInTheDocument();
   });
   it('should renders oneTransplants checkbox with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('1 пересадка')).toBeInTheDocument();
   });
   it('should renders twoTransplants checkbox with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('2 пересадки')).toBeInTheDocument();
   });
   it('should renders threeTransplants checkbox with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('3 пересадки')).toBeInTheDocument();
   });

   it('should calls setTransplants on checkbox change', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      const checkbox = screen.getByTestId('checkbox-all');
      fireEvent.click(checkbox);
      expect(mockSetTransplants).toHaveBeenCalledTimes(1);
   });

   it('should matches snapshot', () => {
      const { asFragment } = render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(asFragment()).toMatchSnapshot();
   });
});
