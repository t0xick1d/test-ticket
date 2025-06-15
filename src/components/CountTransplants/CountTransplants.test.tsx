// import React from 'react';
// import { render } from '@testing-library/react';
// import CountTransplants from './CountTransplants';
// import { TransplantsI } from '../../types/TicketsInterface';

// describe('CountTransplants snapshot', () => {
//    const mockTransplants: TransplantsI = {
//       all: false,
//       noneTransplants: false,
//       oneTransplants: false,
//       twoTransplants: false,
//       threeTransplants: false,
//    };

//    const mockSetTransplants = jest.fn();

//    it('matches snapshot', () => {
//       const { asFragment } = render(
//          <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
//       );
//       expect(asFragment()).toMatchSnapshot();
//    });
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountTransplants from './CountTransplants';
import { TransplantsI } from '../../types/TicketsInterface';

describe('CountTransplants component', () => {
   const mockTransplants: TransplantsI = {
      all: false,
      noneTransplants: false,
      oneTransplants: false,
      twoTransplants: false,
      threeTransplants: false,
   };

   const mockSetTransplants = jest.fn();

   it('renders all checkboxes with correct labels', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(screen.getByLabelText('Все')).toBeInTheDocument();
      expect(screen.getByLabelText('Без пересадок')).toBeInTheDocument();
      expect(screen.getByLabelText('1 пересадка')).toBeInTheDocument();
      expect(screen.getByLabelText('2 пересадки')).toBeInTheDocument();
      expect(screen.getByLabelText('3 пересадки')).toBeInTheDocument();
   });

   it('calls setTransplants on checkbox change', () => {
      render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      const checkbox = screen.getByTestId('checkbox-all');
      fireEvent.click(checkbox);
      expect(mockSetTransplants).toHaveBeenCalledTimes(1);
   });

   it('matches snapshot', () => {
      const { asFragment } = render(
         <CountTransplants transplants={mockTransplants} setTransplants={mockSetTransplants} />,
      );
      expect(asFragment()).toMatchSnapshot();
   });
});
