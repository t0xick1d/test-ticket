import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { within, expect } from 'storybook/test';

import { fn } from 'storybook/test';

import Spinner from '../components/Spinner/Spinner';

const meta = {
   title: 'Spinner',
   component: Spinner,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   args: { onClick: fn() },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
   play: async ({ canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step('should render spinner container', () => {
         expect(canvas.getByTestId('containerdiv')).toBeInTheDocument();
      });
      await step('should render spinner spinerdiv', () => {
         expect(canvas.getByTestId('spindiv')).toBeInTheDocument();
      });
   },
};
