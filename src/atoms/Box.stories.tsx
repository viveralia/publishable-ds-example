import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Box } from './Box';

const meta: Meta = {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    children: {
      defaultValue: 'Text inside a div',
      control: 'text',
    },
    as: {
      control: 'none',
    },
    theme: {
      control: 'none',
    },
    m: {
      control: 'number',
      description: 'margin',
    },
    my: {
      control: 'number',
      description: 'vertical margin',
    },
    mx: {
      control: 'number',
      description: 'horizontal margin',
    },
    mt: {
      control: 'number',
      description: 'margin top',
    },
    mr: {
      control: 'number',
      description: 'margin right',
    },
    mb: {
      control: 'number',
      description: 'margin bottom',
    },
    ml: {
      control: 'number',
      description: 'margin left',
    },
  },
};

export default meta;

const Template: Story = (args) => <Box {...args} />;

export const Default: Story = Template.bind({});
