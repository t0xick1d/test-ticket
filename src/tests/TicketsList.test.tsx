import { render, screen } from '@testing-library/react';
import TicketsList from '../components/TicketsLists/TicketsList';
import { TicketsI, TransplantsI } from '../types/TicketsInterface';

const mockTickets: TicketsI[] = [
   {
      price: 10000,
      carrier: 'SU',
      date: '2025-06-01',
      segments: [
         {
            origin: 'MOW',
            destination: 'HKT',
            departureTime: '2025-06-17T10:30:00',
            duration: 180,
            stops: [],
         },
      ],
   },
   {
      price: 15000,
      carrier: 'S7',
      date: '2025-06-01',
      segments: [
         {
            origin: 'MOW',
            destination: 'HKT',
            departureTime: '2025-06-17T11:00:00',
            duration: 120,
            stops: ['DXB'],
         },
      ],
   },
   {
      price: 12000,
      carrier: 'S7',
      date: '2025-06-01',
      segments: [
         {
            origin: 'MOW',
            destination: 'HKT',
            departureTime: '2025-06-17T11:00:00',
            duration: 120,
            stops: ['DXB'],
         },
      ],
   },
];

const baseTransplants: TransplantsI = {
   all: false,
   noneTransplants: false,
   oneTransplants: false,
   twoTransplants: false,
   threeTransplants: false,
};

describe('TicketsList component', () => {
   it('should check first tickets by price when alignment is "cheap"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/10000 P/i)).toHaveTextContent('10000 P');
   });
   it('should check second tickets by price when alignment is "cheap"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/12000 P/i)).toHaveTextContent('12000 P');
   });
   it('should check third tickets by price when alignment is "cheap"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/15000 P/i)).toHaveTextContent('15000 P');
   });

   it('should check first tickets by speed when alignment is "speed"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="speed"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/15000 P/i)).toHaveTextContent('15000 P');
   });
   it('should check second tickets by speed when alignment is "speed"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="speed"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/12000 P/i)).toHaveTextContent('12000 P');
   });
   it('should check third tickets by speed when alignment is "speed"', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="speed"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(screen.getByText(/10000 P/i)).toHaveTextContent('10000 P');
   });

   it('should filters only tickets with 0 stops', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, noneTransplants: true }}
         />,
      );
      expect(screen.getAllByText(/P/i)).toHaveLength(1);
   });

   it('should filters only tickets with 1 stop max', () => {
      render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, oneTransplants: true }}
         />,
      );
      const cards = screen.getAllByText(/P/i);
      expect(cards).toHaveLength(3);
   });
   it('should matches snapshot', () => {
      const { asFragment } = render(
         <TicketsList
            list={mockTickets}
            alignment="cheap"
            transplants={{ ...baseTransplants, all: true }}
         />,
      );
      expect(asFragment()).toMatchSnapshot();
   });
});
