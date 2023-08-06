import type { Meta, StoryObj } from '@storybook/react';

import  Table  from '../components/Table';
import { Note } from '../Note';

const meta = {
  title: 'Notes/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    headers: ['Header A', 'Header B', 'Header C'],
    children: []
  },
};
