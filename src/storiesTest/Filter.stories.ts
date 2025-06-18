import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { within, expect, userEvent, fn } from 'storybook/test';

import Filter from '../components/Filter/Filter';

const meta = {
   title: 'Filter',
   component: Filter,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: { alignment: 'cheap', handleChange: fn() },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cheap: Story = {
   args: {
      alignment: 'cheap',
   },
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should renders toggle button cheap with correct text', async () => {
         expect(canvas.getByText('Самый дешевый')).toBeInTheDocument();
      });
      await step('should calls handleChange when a button is clicked', async () => {
         await userEvent.type(canvas.getByTestId('buttonCheap'), 'example', {
            delay: 100,
         });
         await userEvent.click(canvas.getByTestId('buttonCheap'));
         await expect(args.handleChange).toHaveBeenCalled();
      });
   },
};
export const Speed: Story = {
   args: {
      alignment: 'speed',
   },
   play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should renders toggle button cheap with correct text', async () => {
         expect(canvas.getByText('Самый Быстрый')).toBeInTheDocument();
      });
      await step('should activates the correct button cheap with correct prop', async () => {
         const button = await canvas.findByTestId('buttonSpeed');
         await userEvent.type(button, 'example', {
            delay: 100,
         });
         await userEvent.click(button);
         await expect(button).toHaveAttribute('aria-pressed', 'true');
      });
   },
};
