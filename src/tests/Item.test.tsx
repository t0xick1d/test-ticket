import { render, screen } from '@testing-library/react';
import Item from '../components/TicketsLists/Item';
import { TicketsI } from '../types/TicketsInterface';

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

   it('should renders price correctly', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText(/13196 P/)).toBeInTheDocument();
   });
   it('should renders carrier correctly', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText(/S7/)).toBeInTheDocument();
   });

   it('should renders formatted departure time', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText('10:30')).toBeInTheDocument();
   });
   it('should renders formatted departure duration', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText('2ч 0м')).toBeInTheDocument();
   });

   it('should renders number of stops', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText(/2 пересадки/)).toBeInTheDocument();
   });
   it('should renders first stop', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText('DXB')).toBeInTheDocument();
   });
   it('should renders second stop', () => {
      render(<Item data={mockTicket} />);
      expect(screen.getByText('IST')).toBeInTheDocument();
   });

   it('should matches snapshot', () => {
      const { asFragment } = render(<Item data={mockTicket} />);
      expect(asFragment()).toMatchSnapshot();
   });
});
