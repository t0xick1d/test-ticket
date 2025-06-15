import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';
import { TicketsI } from '../../types/TicketsInterface';

describe('Item component', () => {
   const mockTicket: TicketsI = {
      price: 13196,
      carrier: 'S7',
      date: '2025-06-01',
      segments: [
         {
            origin: 'MOW',
            destination: 'HKT',
            departureTime: '2025-06-17T10:30:00',
            duration: 120,
            stops: ['DXB', 'IST'],
         },
      ],
   };

   it('renders price and carrier correctly', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText(/13196 P/)).toBeInTheDocument();
      expect(screen.getByText(/S7/)).toBeInTheDocument();
   });

   it('renders formatted departure time and duration', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText('10:30')).toBeInTheDocument();
      expect(screen.getByText('2ч 0м')).toBeInTheDocument();
   });

   it('renders number of stops and each stop', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText(/2 пересадки/)).toBeInTheDocument();
      expect(screen.getByText('DXB')).toBeInTheDocument();
      expect(screen.getByText('IST')).toBeInTheDocument();
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<Item data={mockTicket} />);
      expect(asFragment()).toMatchSnapshot();
   });
});
