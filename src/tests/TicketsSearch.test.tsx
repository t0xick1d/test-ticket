// TicketsSearch.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketsSearch from '../pages/TicketsSearch/TicketsSearch';

import { useGetTicketsQuery, useGetSearchIdQuery } from '../redux/ducks/tickets';

jest.mock('../redux/ducks/tickets', () => ({
   useGetTicketsQuery: jest.fn(),
   useGetSearchIdQuery: jest.fn(),
}));

jest.mock('../components', () => ({
   TicketsList: () => <div>TicketsListMock</div>,
   Filter: () => <div>FilterMock</div>,
   CountTransplants: () => <div>CountTransplantsMock</div>,
   Spinner: () => <div>SpinnerMock</div>,
}));

describe('TicketsSearch', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   it('should renders Spinner while loading', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({ isLoading: true });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('SpinnerMock')).toBeInTheDocument();
   });

   it('should renders error message on error', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({ isLoading: false, error: true });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: false });

      render(<TicketsSearch />);

      expect(screen.getByText('errorSearchID')).toBeInTheDocument();
   });

   it('should renders component CountTransplantsMock', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({
         isLoading: false,
         error: null,
         data: [{ id: 1 }],
      });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('CountTransplantsMock')).toBeInTheDocument();
   });
   it('should renders component FilterMock', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({
         isLoading: false,
         error: null,
         data: [{ id: 1 }],
      });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('FilterMock')).toBeInTheDocument();
   });
   it('should renders component TicketsListMock', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({
         isLoading: false,
         error: null,
         data: [{ id: 1 }],
      });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('TicketsListMock')).toBeInTheDocument();
   });

   it('should matches snapshot', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({
         isLoading: false,
         error: null,
         data: [{ id: 1 }],
      });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      const { asFragment } = render(<TicketsSearch />);
      expect(asFragment()).toMatchSnapshot();
   });
});
