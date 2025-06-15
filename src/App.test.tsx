import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages', () => ({
   TicketsSearch: () => <div>Mocked TicketsSearch</div>,
   Home: () => <div>Mocked Home</div>,
}));

describe('App', () => {
   it('renders logo and navigation links', () => {
      render(
         <MemoryRouter>
            <App />
         </MemoryRouter>,
      );
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument();
   });

   it('navigates to /home and renders Home page', () => {
      render(
         <MemoryRouter initialEntries={['/home']}>
            <App />
         </MemoryRouter>,
      );

      expect(screen.getByText('Mocked Home')).toBeInTheDocument();
   });

   it('navigates to /search and renders TicketsSearch page', () => {
      render(
         <MemoryRouter initialEntries={['/search']}>
            <App />
         </MemoryRouter>,
      );

      expect(screen.getByText('Mocked TicketsSearch')).toBeInTheDocument();
   });

   it('renders 404 for unknown route', () => {
      render(
         <MemoryRouter initialEntries={['/unknown']}>
            <App />
         </MemoryRouter>,
      );

      expect(screen.getByText(/404 Error/i)).toBeInTheDocument();
   });

   it('matches snapshot', () => {
      const { asFragment } = render(
         <MemoryRouter initialEntries={['/search']}>
            <App />
         </MemoryRouter>,
      );

      expect(asFragment()).toMatchSnapshot();
   });
});
