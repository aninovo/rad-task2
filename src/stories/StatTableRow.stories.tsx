import type { Meta, StoryObj } from '@storybook/react';

import  StatTableRow  from '../components/StatTableRow';
import { Note } from '../Note';
import initialData from '../redux/data';

const meta = {
  title: 'Notes/StatTableRow',
  component: StatTableRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof StatTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notes: initialData,
    category: 'Idea'
  },
};
