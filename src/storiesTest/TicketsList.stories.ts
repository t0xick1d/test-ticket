import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { within, expect } from 'storybook/test';

import TicketsList from '../components/TicketsLists/TicketsList';

const meta = {
   title: 'TicketsList',
   component: TicketsList,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      list: [
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
      ],
      transplants: {
         all: false,
         noneTransplants: false,
         oneTransplants: false,
         twoTransplants: false,
         threeTransplants: false,
      },
      alignment: 'cheap',
   },
} satisfies Meta<typeof TicketsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpectData: Story = {
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('all')).toBeInTheDocument();
      });
      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('all')).toBeInTheDocument();
      });
      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('all')).toBeInTheDocument();
      });
      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('all')).toBeInTheDocument();
      });      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('all')).toBeInTheDocument();
      });
   },
};
