import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

describe('Filter snapshot', () => {
   const mockHandleChange = jest.fn();
   beforeEach(() => {
      mockHandleChange.mockClear();
   });

   it('renders both toggle buttons with correct text', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      expect(screen.getByText('Самый дешевый')).toBeInTheDocument();
      expect(screen.getByText('Самый Быстрый')).toBeInTheDocument();
   });

   it('calls handleChange when a button is clicked', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      fireEvent.click(screen.getByText('Самый Быстрый'));
      expect(mockHandleChange).toHaveBeenCalledTimes(1);
   });

   it('activates the correct button based on alignment prop', () => {
      const { rerender } = render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      const cheapButton = screen.getByText('Самый дешевый');
      const speedButton = screen.getByText('Самый Быстрый');

      expect(cheapButton.getAttribute('aria-pressed')).toBe('true');
      expect(speedButton.getAttribute('aria-pressed')).toBe('false');

      rerender(<Filter alignment="speed" handleChange={mockHandleChange} />);

      expect(cheapButton.getAttribute('aria-pressed')).toBe('false');
      expect(speedButton.getAttribute('aria-pressed')).toBe('true');
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      expect(asFragment()).toMatchSnapshot();
   });
});
