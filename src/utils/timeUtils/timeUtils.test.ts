import { formatMinutesToHours, getHoursAndMinutes } from './timeUtils';

describe('formatMinutesToHours', () => {
   it('should format 0 minutes correctly', () => {
      expect(formatMinutesToHours(0)).toBe('0ч 0м');
   });

   it('should format minutes less than 60 correctly', () => {
      expect(formatMinutesToHours(45)).toBe('0ч 45м');
   });

   it('should format exact hour correctly', () => {
      expect(formatMinutesToHours(120)).toBe('2ч 0м');
   });

   it('should format hours and minutes correctly', () => {
      expect(formatMinutesToHours(135)).toBe('2ч 15м');
   });
});

describe('getHoursAndMinutes', () => {
   it('should extract time from a valid ISO string', () => {
      const result = getHoursAndMinutes('2025-06-17T10:30:00');
      expect(result).toBe('10:30');
   });

   it('should pad single-digit hours and minutes with zero', () => {
      const result = getHoursAndMinutes('2025-06-17T05:07:00');
      expect(result).toBe('05:07');
   });

   it('should work with edge time like 00:00', () => {
      const result = getHoursAndMinutes('2025-06-17T00:00:00');
      expect(result).toBe('00:00');
   });
});
