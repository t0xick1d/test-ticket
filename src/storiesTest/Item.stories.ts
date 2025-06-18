import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { within, expect } from 'storybook/test';

import Item from '../components/TicketsLists/Item';

const meta = {
   title: 'Item',
   component: Item,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      data: {
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
      },
   },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpectData: Story = {
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should renders price', async () => {
         expect(canvas.getByText('13196 P')).toBeInTheDocument();
      });
      await step('should renders carrier correctly', async () => {
         expect(canvas.getByText('S7')).toBeInTheDocument();
      });
      await step('should renders formatted departure time', async () => {
         expect(canvas.getByText('10:30')).toBeInTheDocument();
      });
      await step('should renders formatted departure duration', async () => {
         expect(canvas.getByText('2ч 0м')).toBeInTheDocument();
      });
      await step('should renders number of stops', async () => {
         expect(canvas.getByText('2 пересадки')).toBeInTheDocument();
      });
   },
};
