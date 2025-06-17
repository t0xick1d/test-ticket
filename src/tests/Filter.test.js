import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter/Filter';

describe('Filter snapshot', () => {
   const mockHandleChange = jest.fn();
   beforeEach(() => {
      mockHandleChange.mockClear();
   });

   it('should renders toggle button cheap with correct text', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      expect(screen.getByText('Самый дешевый')).toBeInTheDocument();
   });

   it('should renders toggle button speed with correct text', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      expect(screen.getByText('Самый Быстрый')).toBeInTheDocument();
   });

   it('should calls handleChange when a button is clicked', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      fireEvent.click(screen.getByText('Самый Быстрый'));
      expect(mockHandleChange).toHaveBeenCalledTimes(1);
   });

   it('should activates the correct button cheap with correct prop', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      const cheapButton = screen.getByText('Самый дешевый');
      expect(cheapButton.getAttribute('aria-pressed')).toBe('true');
   });

   it('should activates the correct button cheap with mistake prop', () => {
      render(<Filter alignment="speed" handleChange={mockHandleChange} />);
      const cheapButton = screen.getByText('Самый дешевый');
      expect(cheapButton.getAttribute('aria-pressed')).toBe('false');
   });
   it('should activates the correct button speed with correct prop', () => {
      render(<Filter alignment="speed" handleChange={mockHandleChange} />);
      const speedButton = screen.getByText('Самый Быстрый');

      expect(speedButton.getAttribute('aria-pressed')).toBe('true');
   });
   it('should activates the correct button speed with misstake prop', () => {
      render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      const speedButton = screen.getByText('Самый Быстрый');

      expect(speedButton.getAttribute('aria-pressed')).toBe('false');
   });

   it('should matches snapshot', () => {
      const { asFragment } = render(<Filter alignment="cheap" handleChange={mockHandleChange} />);
      expect(asFragment()).toMatchSnapshot();
   });
});
