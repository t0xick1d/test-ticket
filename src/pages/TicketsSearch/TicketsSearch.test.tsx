// TicketsSearch.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketsSearch from './TicketsSearch';

import { useGetTicketsQuery, useGetSearchIdQuery } from '../../redux/ducks/tickets';

jest.mock('../../redux/ducks/tickets', () => ({
   useGetTicketsQuery: jest.fn(),
   useGetSearchIdQuery: jest.fn(),
}));

jest.mock('../../components', () => ({
   TicketsList: () => <div>TicketsListMock</div>,
   Filter: () => <div>FilterMock</div>,
   CountTransplants: () => <div>CountTransplantsMock</div>,
   Spinner: () => <div>SpinnerMock</div>,
}));

describe('TicketsSearch', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   it('renders Spinner while loading', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({ isLoading: true });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('SpinnerMock')).toBeInTheDocument();
   });

   it('renders error message on error', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({ isLoading: false, error: true });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: false });

      render(<TicketsSearch />);

      expect(screen.getByText('errorSearchID')).toBeInTheDocument();
   });

   it('renders components with data', () => {
      (useGetTicketsQuery as jest.Mock).mockReturnValue({
         isLoading: false,
         error: null,
         data: [{ id: 1 }],
      });
      (useGetSearchIdQuery as jest.Mock).mockReturnValue({ error: null });

      render(<TicketsSearch />);

      expect(screen.getByText('CountTransplantsMock')).toBeInTheDocument();
      expect(screen.getByText('FilterMock')).toBeInTheDocument();
      expect(screen.getByText('TicketsListMock')).toBeInTheDocument();
   });

   it('matches snapshot', () => {
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
