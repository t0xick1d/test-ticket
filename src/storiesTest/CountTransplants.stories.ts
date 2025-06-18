import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { within, expect, fn, userEvent } from 'storybook/test';

import CountTransplants from '../components/CountTransplants/CountTransplants';

const meta = {
   title: 'CountTransplants',
   component: CountTransplants,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      transplants: {
         all: true,
         noneTransplants: false,
         oneTransplants: false,
         twoTransplants: false,
         threeTransplants: false,
      },
      setTransplants: fn(),
   }, 
} satisfies Meta<typeof CountTransplants>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CorrectLabel: Story = {
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should renders all checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('Все')).toBeInTheDocument();
      });
      await step('should renders noneTransplants checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('Без пересадок')).toBeInTheDocument();
      });
      await step('should renders oneTransplants checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('1 пересадка')).toBeInTheDocument();
      });
      await step('should renders twoTransplants checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('2 пересадки')).toBeInTheDocument();
      });
      await step('should renders threeTransplants checkbox with correct labels', async () => {
         expect(canvas.getByLabelText('3 пересадки')).toBeInTheDocument();
      });
   },
};
export const CorrectClick: Story = {
   args: {
      transplants: {
         all: false,
         noneTransplants: true,
         oneTransplants: false,
         twoTransplants: false,
         threeTransplants: false,
      },
   },
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should calls setTransplants on checkbox change', async () => {
         await userEvent.type(canvas.getByLabelText('Все'), 'ExamplePassword', {
            delay: 100,
         });
         await userEvent.click(canvas.getByLabelText('Все'));
         await expect(args.setTransplants).toHaveBeenCalled();
      });
   },
};
